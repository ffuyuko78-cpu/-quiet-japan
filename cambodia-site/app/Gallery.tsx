"use client";

import { useEffect, useState } from "react";

export default function Gallery({ photos }: { photos: { src: string; alt: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((open + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((open - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  return (
    <>
      <div className="masonry">
        {photos.map((p, i) => (
          <button key={p.src} className="tile" onClick={() => setOpen(i)} aria-label={`${p.alt}を大きく見る`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos[open].src} alt={photos[open].alt} />
          <button className="close" aria-label="閉じる">×</button>
        </div>
      )}
    </>
  );
}
