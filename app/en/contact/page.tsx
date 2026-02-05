"use client";

import { useMemo, useState } from "react";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

const CONTACT_TO = "info@aipusula.com";

type FormType = "email" | "bug" | "tool" | "offer" | "web";

const TYPE_LABEL: Record<FormType, string> = {
  email: "Send Email",
  bug: "Report a bug / Share feedback",
  tool: "Suggest a new AI tool",
  offer: "Partnership / Ads / Featured placement",
  web: "Website request",
};

export default function ContactEN() {
  const [openType, setOpenType] = useState<FormType | null>(null);

  // Common form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Type-based optional fields
  const [pageUrl, setPageUrl] = useState(""); // bug
  const [toolName, setToolName] = useState(""); // tool
  const [toolUrl, setToolUrl] = useState(""); // tool
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

    // tool suggestion: require tool name or tool url
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
        locale: "en",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || "Failed to send");

      setSent(true);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setSent(false);
      setError(e?.message || "Something went wrong");
    }
  }

  return (
    <>
      <Navbar lang="en" />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <Link href="/en" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Contact</span>
          </div>

          {/* Header card */}
          <section className="rounded-[32px] border border-violet-500/40 bg-gradient-to-r from-violet-200 to-fuchsia-200 p-7 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact
            </h1>

            <p className="mt-2 text-gray-800/80 max-w-2xl">
              AI Pusula is currently in development. Use this page to report
              issues, suggest new tools, or discuss partnerships / ads / featured
              placement.
            </p>

            {/* Website service (same card, minimal impact) */}
            <div className="mt-4 rounded-2xl bg-white/70 border border-black/10 p-4">
              <div className="text-sm font-semibold text-gray-900">
                Need a website?
              </div>
              <div className="mt-1 text-sm text-gray-700">
                I can design and build a website that fits your needs (personal,
                business, landing page). Submit a request to discuss pricing and
                timeline.
              </div>
              <button
                onClick={() => openForm("web")}
                className="mt-3 inline-flex rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black transition"
              >
                Website request →
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Was mailto — now opens form */}
              <button
                onClick={() => openForm("email")}
                className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition"
              >
                Send Email →
              </button>

              <Link
                href="/en"
                className="rounded-full bg-white/85 border border-black/20 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Browse all tools
              </Link>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              Email:{" "}
              <span className="font-semibold underline decoration-black/20">
                {CONTACT_TO}
              </span>
            </div>

            {/* Inline form under header for email/web */}
            {openType === "email" || openType === "web" ? (
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bug / feedback */}
            <div className="rounded-[28px] border border-emerald-500/35 bg-gradient-to-r from-emerald-100 to-cyan-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Report a bug / Feedback
              </h2>
              <p className="mt-2 text-gray-700">
                Found an issue or have an improvement idea? Send it here — we’ll
                fix it fast.
              </p>

              <button
                onClick={() => openForm("bug")}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Open form →
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

            {/* Tool submission */}
            <div className="rounded-[28px] border border-sky-500/35 bg-gradient-to-r from-indigo-200 to-sky-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Suggest a new AI tool
              </h2>
              <p className="mt-2 text-gray-700">
                Discovered a great tool? Send the official link + a short
                description so we can review and add it.
              </p>

              <button
                onClick={() => openForm("tool")}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Suggest tool →
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

            {/* Partnership */}
            <div className="rounded-[28px] border border-amber-500/35 bg-gradient-to-r from-amber-200 to-rose-200 p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-gray-900">
                Partnership / Ads / Featured
              </h2>
              <p className="mt-2 text-gray-700">
                If you own an AI tool or represent a brand, we can discuss
                featured placement, sponsor spots, and visibility options.
              </p>

              <button
                onClick={() => openForm("offer")}
                className="mt-4 inline-flex rounded-full bg-white/85 border border-black/20 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition shadow-sm"
              >
                Send proposal →
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

          <div className="mt-10 text-sm text-gray-600"></div>
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
    <div className="mt-5 rounded-3xl border border-black/10 bg-white/70 p-5">
      <div className="text-sm font-extrabold text-gray-900">{title}</div>
      <div className="mt-1 text-xs text-gray-600">
        Fill out the form and send. Your message will be delivered to our inbox.
      </div>

      <div className="mt-4 grid gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {type === "bug" ? (
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
            placeholder="Page URL (optional)"
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
          />
        ) : null}

        {type === "tool" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Tool name (recommended)"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Official URL (https://...)"
              value={toolUrl}
              onChange={(e) => setToolUrl(e.target.value)}
            />
          </div>
        ) : null}

        {type === "offer" || type === "web" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Company / Brand (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Budget range (optional)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        ) : null}

        <textarea
          className="min-h-[140px] w-full resize-none rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 bg-white text-gray-900 placeholder:text-gray-500"
          placeholder={
            type === "web"
              ? "What kind of website do you need? (personal, business, landing page) Features, examples, content…"
              : type === "offer"
              ? "Describe your request (featured placement, sponsor slot, ads). Include details…"
              : type === "tool"
              ? "Short description + category (Text/Image/Video/Audio/Code/Productivity) + pricing…"
              : type === "bug"
              ? "Describe the issue/feedback. Add screenshot links, device/browser details if possible…"
              : "Write your message…"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {sent === true ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Sent ✅
          </div>
        ) : null}

        {sent === false ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Failed: {error ?? "Unknown error"}
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
            {loading ? "Sending..." : "Send"}
          </button>

          <div className="text-xs text-gray-600">
            Delivery: <span className="font-semibold">{CONTACT_TO}</span>
          </div>
        </div>

        {type === "tool" ? (
          <div className="text-xs text-gray-600">
            Note: Fill at least one of these: “Tool name” or “Official URL”.
          </div>
        ) : null}
      </div>
    </div>
  );
}
