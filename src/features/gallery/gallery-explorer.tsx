"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";

import { galleryItems } from "@/data/content";

const categories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export function GalleryExplorer() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const items = useMemo(() => {
    return filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const active = selected === null ? null : items[selected];

  function move(direction: -1 | 1) {
    if (selected === null) return;
    setSelected((selected + direction + items.length) % items.length);
  }

  return (
    <>
      <div className="gallery-filter" aria-label="Gallery categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setSelected(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-page-grid">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.src}
            onClick={() => setSelected(index)}
            className={index % 5 === 0 ? "gallery-wide" : undefined}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                index % 5 === 0
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
            />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="lightbox-overlay" />
          <Dialog.Content className="lightbox-content">
            <Dialog.Title className="sr-only">
              {active?.title ?? "Gallery image"}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              {active?.alt}
            </Dialog.Description>
            <Dialog.Close asChild>
              <button className="lightbox-close" aria-label="Close gallery">
                <X aria-hidden="true" size={24} />
              </button>
            </Dialog.Close>
            {active && (
              <div className="lightbox-image">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="96vw"
                  priority
                />
              </div>
            )}
            <div className="lightbox-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft aria-hidden="true" size={24} />
              </button>
              <span aria-live="polite">
                {selected === null ? 0 : selected + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next image"
              >
                <ChevronRight aria-hidden="true" size={24} />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
