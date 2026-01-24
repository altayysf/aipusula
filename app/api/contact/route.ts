import { NextResponse } from "next/server";
import { Resend } from "resend";

type FormType = "email" | "bug" | "tool" | "offer" | "web";

export async function POST(req: Request) {
  try {
    // 1) Env kontrol
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO || "info@aipusula.com";

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY eksik (Vercel env)" },
        { status: 500 }
      );
    }

    // 2) Body parse (JSON bozuksa bile düzgün hata döndür)
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Geçersiz JSON body (request.json parse edilemedi)" },
        { status: 400 }
      );
    }

    const {
      type,
      name,
      email,
      message,
      pageUrl,
      toolName,
      toolUrl,
      company,
      budget,
    } = body as {
      type: FormType;
      name: string;
      email: string;
      message: string;
      pageUrl?: string;
      toolName?: string;
      toolUrl?: string;
      company?: string;
      budget?: string;
    };

    if (!type || !name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Zorunlu alanlar eksik (type, name, email, message)" },
        { status: 400 }
      );
    }

    // 3) Mail içeriği
    const subjectMap: Record<FormType, string> = {
      email: "AI Pusula | İletişim",
      bug: "AI Pusula | Hata / Öneri",
      tool: "AI Pusula | Yeni Araç Önerisi",
      offer: "AI Pusula | İş Birliği / Reklam",
      web: "AI Pusula | Web Sitesi Talebi",
    };

    const subject = subjectMap[type] || "AI Pusula | Mesaj";

    const lines = [
      `Tür: ${type}`,
      `Ad: ${name}`,
      `E-posta: ${email}`,
      "",
      pageUrl ? `Sayfa: ${pageUrl}` : null,
      toolName ? `Araç Adı: ${toolName}` : null,
      toolUrl ? `Araç Link: ${toolUrl}` : null,
      company ? `Şirket/Marka: ${company}` : null,
      budget ? `Bütçe: ${budget}` : null,
      "",
      "Mesaj:",
      message,
    ].filter(Boolean);

    const text = lines.join("\n");

    // 4) Resend gönder
    const resend = new Resend(RESEND_API_KEY);

    // ✅ FROM: Resend’de doğrulanmadıysa bile çalışması için bunu kullan
    // (Sonra domain doğrulayınca from'u info@aipusula.com yaparız)
    const from = "AI Pusula <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [CONTACT_TO],
      subject,
      email, // reply-to gibi davranması için (bazı hesaplarda etkili)
      text,
    } as any);

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Resend error" },
        { status: 500 }
      );
    }

    // 5) Her şey OK
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
