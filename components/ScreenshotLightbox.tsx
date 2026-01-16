"use client";

import Image from "next/image";

export default function ScreenshotLightbox({
  isOpen,
  src,
  alt,
  onClose,
}: {
  isOpen: boolean;
  src?: string | null;
  alt?: string;
  onClose: () => void;
}) {
  if (!isOpen || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(e) => {
        // arka plana tıklayınca kapat
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full bg-white text-gray-900 shadow-lg border border-black/10 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          ✕
        </button>

        <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={src}
              alt={alt ?? "Screenshot"}
              fill
              className="object-contain bg-black"
              priority
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/80">
          <span>ESC / dışarı tıkla / ✕ ile kapat</span>
        </div>
      </div>

      {/* ESC ile kapat */}
      <EscCloser onClose={onClose} />
    </div>
  );
}

function EscCloser({ onClose }: { onClose: () => void }) {
  // küçük bir client helper
  // eslint-disable-next-line react-hooks/rules-of-hooks
  require("react").useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return null;
}
