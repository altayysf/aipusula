"use client";

import { useMemo, useState } from "react";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

const CONTACT_TO = "info@aipusula.com";

type FormType = "email" | "bug" | "tool" | "offer" | "web";

const TYPE_LABEL: Record<FormType, string> = {
  email: "E-posta gönder",
  bug: "Hata bildir / öneri ver",
  tool: "Yeni AI aracı öner",
  offer: "İş birliği / reklam / sabitleme",
  web: "Web sitesi talebi",
};

export default function ContactTR() {
  const [openType, setOpenType] = useState<FormType | null>(null);

  // Ortak form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Tip bazlı opsiyonel alanlar
  const [pageUrl, setPageUrl] = useState(""); // bug için
  const [toolName, setToolName] = useState(""); // tool için
  const [toolUrl, setToolUrl] = useState(""); // tool için
  const [company, setCompany] = useState(""); // offer/web
  const [budget, setBudget] = useState(""); // offer/web

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  function openForm(type: FormType) {
    setOpenType((prev) => (prev === type ? null : type));
    setSent(null);
    setError(null);
    setLoading(false);
  }

  const canSend = useMemo(() => {
    if (!openType) return false;
    if (!name.trim() || !email.trim() || !message.trim()) return false;

    // tool önerisinde link veya araç adı isteyelim (en az biri)
    if (openType === "tool" && !toolName.trim() && !toolUrl.trim()) return false;

    return true;
  }, [openType, name, email, message, toolName, toolUrl]);

  async function submit() {
    if (!openType || !canSend || loading) return;

    setLoading(true);
    setSent(null);
    setError(null);

    try {
      const payload = {
        type: openType,
        name,
        email,
        message,
        pageUrl: openType === "bug" ? pageUrl : undefined,
        toolName: openType === "tool" ? toolName : undefined,
        toolUrl: openType === "tool" ? toolUrl : undefined,
        company: openType === "offer" || openType === "web" ? company : undefined,
        budget: openType === "offer" || openType === "web" ? budget : undefined,
        locale: "tr",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || "Gönderilemedi");

      setSent(true);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setSent(false);
      setError(e?.message || "Bir hata oluştu");
    }
  }

  return (
    <>
      <Navbar lang="tr" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 space-y-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500">
            <Link href="/tr" className="hover:underline">
              Ana Sayfa
            </Link>
            {" / "}
            <span className="text-gray-900 font-medium">İletişim</span>
          </nav>

          {/* Hero */}
          <section>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              İletişim
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              AI Pusula şu an geliştirme aşamasında. Hata bildirimi, yeni araç
              önerisi, iş birliği / reklam / ana sayfada sabitleme taleplerin
              için buradayız.
            </p>
          </section>

          {/* Website service */}
          <section className="rounded-[28px] border border-black/8 bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">🌐 Web sitesi yaptırmak mı istiyorsun?</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              İhtiyacına uygun web sitesi (kişisel, kurumsal, landing page)
              tasarlayıp geliştirebilirim. Ücret ve teslim süresi için talep
              bırakabilirsin.
            </p>
            <button
              onClick={() => openForm("web")}
              className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition"
            >
              Web sitesi talebi →
            </button>

            {openType === "web" ? (
              <InlineForm
                type={openType}
                title={TYPE_LABEL[openType]}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                company={company}
                setCompany={setCompany}
                budget={budget}
                setBudget={setBudget}
                pageUrl={pageUrl}
                setPageUrl={setPageUrl}
                toolName={toolName}
                setToolName={setToolName}
                toolUrl={toolUrl}
                setToolUrl={setToolUrl}
                loading={loading}
                sent={sent}
                error={error}
                canSend={canSend}
                onSubmit={submit}
              />
            ) : null}
          </section>

          {/* Email CTA */}
          <section className="rounded-[28px] bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-200 p-7 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Bize Ulaş</h2>
            <p className="text-gray-600 text-sm mb-2">
              E-posta: <span className="font-semibold">{CONTACT_TO}</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <button
                onClick={() => openForm("email")}
                className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition"
              >
                E-posta gönder →
              </button>
              <Link
                href="/tr"
                className="inline-flex rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Tüm araçlara göz at
              </Link>
            </div>

            {openType === "email" ? (
              <InlineForm
                type={openType}
                title={TYPE_LABEL[openType]}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                company={company}
                setCompany={setCompany}
                budget={budget}
                setBudget={setBudget}
                pageUrl={pageUrl}
                setPageUrl={setPageUrl}
                toolName={toolName}
                setToolName={setToolName}
                toolUrl={toolUrl}
                setToolUrl={setToolUrl}
                loading={loading}
                sent={sent}
                error={error}
                canSend={canSend}
                onSubmit={submit}
              />
            ) : null}
          </section>

          {/* 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Bug / feedback */}
            <div className="rounded-[28px] border border-black/8 bg-white p-6">
              <div className="text-2xl mb-3">🐛</div>
              <h2 className="text-lg font-extrabold text-gray-900 mb-2">
                Hata bildir / öneri ver
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Site yeni. Bir hata, eksik bilgi veya geliştirme fikrin varsa
                yaz—hızlıca düzeltelim.
              </p>

              <button
                onClick={() => openForm("bug")}
                className="inline-flex rounded-full bg-white border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition shadow-sm"
              >
                Hata/öneri formu →
              </button>

              {openType === "bug" ? (
                <InlineForm
                  type="bug"
                  title={TYPE_LABEL.bug}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  message={message}
                  setMessage={setMessage}
                  company={company}
                  setCompany={setCompany}
                  budget={budget}
                  setBudget={setBudget}
                  pageUrl={pageUrl}
                  setPageUrl={setPageUrl}
                  toolName={toolName}
                  setToolName={setToolName}
                  toolUrl={toolUrl}
                  setToolUrl={setToolUrl}
                  loading={loading}
                  sent={sent}
                  error={error}
                  canSend={canSend}
                  onSubmit={submit}
                />
              ) : null}
            </div>

            {/* New tool suggestion */}
            <div className="rounded-[28px] border border-black/8 bg-white p-6">
              <div className="text-2xl mb-3">🤖</div>
              <h2 className="text-lg font-extrabold text-gray-900 mb-2">
                Yeni AI aracı öner
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Harika bir AI aracı biliyor musun? Bize öner—en iyilerini
                ekliyoruz!
              </p>

              <button
                onClick={() => openForm("tool")}
                className="inline-flex rounded-full bg-white border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition shadow-sm"
              >
                Araç öner →
              </button>

              {openType === "tool" ? (
                <InlineForm
                  type="tool"
                  title={TYPE_LABEL.tool}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  message={message}
                  setMessage={setMessage}
                  company={company}
                  setCompany={setCompany}
                  budget={budget}
                  setBudget={setBudget}
                  pageUrl={pageUrl}
                  setPageUrl={setPageUrl}
                  toolName={toolName}
                  setToolName={setToolName}
                  toolUrl={toolUrl}
                  setToolUrl={setToolUrl}
                  loading={loading}
                  sent={sent}
                  error={error}
                  canSend={canSend}
                  onSubmit={submit}
                />
              ) : null}
            </div>

            {/* Partnership / Ads */}
            <div className="rounded-[28px] border border-black/8 bg-white p-6">
              <div className="text-2xl mb-3">🤝</div>
              <h2 className="text-lg font-extrabold text-gray-900 mb-2">
                İş birliği / Reklam
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                AI Pusula ile ortak olmak, reklam vermek veya öne çıkmak mı
                istiyorsun? Teklifini buradan gönder.
              </p>

              <button
                onClick={() => openForm("offer")}
                className="inline-flex rounded-full bg-white border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition shadow-sm"
              >
                Teklif gönder →
              </button>

              {openType === "offer" ? (
                <InlineForm
                  type="offer"
                  title={TYPE_LABEL.offer}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  message={message}
                  setMessage={setMessage}
                  company={company}
                  setCompany={setCompany}
                  budget={budget}
                  setBudget={setBudget}
                  pageUrl={pageUrl}
                  setPageUrl={setPageUrl}
                  toolName={toolName}
                  setToolName={setToolName}
                  toolUrl={toolUrl}
                  setToolUrl={setToolUrl}
                  loading={loading}
                  sent={sent}
                  error={error}
                  canSend={canSend}
                  onSubmit={submit}
                />
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function InlineForm(props: {
  type: FormType;
  title: string;

  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  message: string;
  setMessage: (v: string) => void;

  pageUrl: string;
  setPageUrl: (v: string) => void;
  toolName: string;
  setToolName: (v: string) => void;
  toolUrl: string;
  setToolUrl: (v: string) => void;
  company: string;
  setCompany: (v: string) => void;
  budget: string;
  setBudget: (v: string) => void;

  loading: boolean;
  sent: null | boolean;
  error: string | null;
  canSend: boolean;
  onSubmit: () => void;
}) {
  const {
    type,
    title,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    pageUrl,
    setPageUrl,
    toolName,
    setToolName,
    toolUrl,
    setToolUrl,
    company,
    setCompany,
    budget,
    setBudget,
    loading,
    sent,
    error,
    canSend,
    onSubmit,
  } = props;

  return (
    <div className="mt-5 rounded-2xl border border-black/10 bg-gray-50 p-5">
      <div className="text-sm font-bold text-gray-900">{title}</div>
      <div className="mt-1 text-xs text-gray-600">
        Formu doldur ve gönder. Mesajın ekibe iletilecek.
      </div>

      <div className="mt-4 grid gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
            placeholder="E-posta"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {type === "bug" ? (
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
            placeholder="Hata aldığın sayfa linki (opsiyonel)"
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
          />
        ) : null}

        {type === "tool" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Araç adı (önerilir)"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Resmi link (https://...)"
              value={toolUrl}
              onChange={(e) => setToolUrl(e.target.value)}
            />
          </div>
        ) : null}

        {type === "offer" || type === "web" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Şirket / Marka (opsiyonel)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
              placeholder="Bütçe aralığı (opsiyonel)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        ) : null}

        <textarea
          className="min-h-[140px] w-full resize-none rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal"
          placeholder={
            type === "web"
              ? "Ne tür site istiyorsun? (ör. kurumsal, kişisel, landing page) İçerik, örnek site linkleri, istediğin özellikler…"
              : type === "offer"
              ? "Talebini yaz. (ör. ana sayfa sabitleme, sponsor alanı, reklam) Detayları ekle…"
              : type === "tool"
              ? "Kısa açıklama + kategori (Yazı/Görsel/Video/Ses/Kod/Üretkenlik) + ücretlendirme…"
              : type === "bug"
              ? "Hata/önerini yaz. Varsa ekran görüntüsü linki, cihaz/tarayıcı bilgisi ekle…"
              : "Mesajını yaz…"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {sent === true ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Gönderildi ✅
          </div>
        ) : null}

        {sent === false ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Gönderilemedi: {error ?? "Bilinmeyen hata"}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onSubmit}
            disabled={!canSend || loading}
            className={[
              "rounded-full px-6 py-3 text-sm font-semibold transition shadow-sm",
              !canSend || loading
                ? "bg-gray-200 text-gray-500"
                : "bg-gray-900 text-white hover:bg-black",
            ].join(" ")}
          >
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>

          <div className="text-xs text-gray-600">
            Gönderim: <span className="font-semibold">{CONTACT_TO}</span>
          </div>
        </div>

        {type === "tool" ? (
          <div className="text-xs text-gray-600">
            Not: "Araç adı" veya "resmi link" alanlarından en az birini doldur.
          </div>
        ) : null}
      </div>
    </div>
  );
}
