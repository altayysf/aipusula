"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ScreenshotLightbox from "./ScreenshotLightbox";

export default function ScreenshotGrid({
  screenshots,
  toolName,
}: {
  screenshots?: string[];
  toolName: string;
}) {
  const list = useMemo(() => screenshots ?? [], [screenshots]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-black/10 bg-gray-50 p-8 text-gray-600">
        Henüz ekran görüntüsü eklenmedi. <br />
        <span className="text-gray-500 text-sm">
          public/screenshots içine görsel atıp tools.ts içine yolunu yaz.
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {list.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setActive(src);
              setOpen(true);
            }}
            className="group rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden text-left"
            title="Büyüt"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={src}
                alt={`${toolName} screenshot ${i + 1}`}
                fill
                className="object-cover group-hover:scale-[1.01] transition"
              />
            </div>
          </button>
        ))}
      </div>

      <ScreenshotLightbox
        isOpen={open}
        src={active}
        alt={`${toolName} screenshot`}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
      />
    </>
  );
}
