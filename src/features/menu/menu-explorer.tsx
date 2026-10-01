"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, Sprout, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/form-controls";
import { menu, menuItems } from "@/data/menu";
import { cn, formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";

type SelectedItem = MenuItem & {
  categoryId: string;
  categoryName: string;
  categoryNotes: string[];
  categoryOptions: Array<{
    name: string;
    values: string[];
    prices?: number[];
  }>;
};

export function MenuExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const initialDish = searchParams.get("dish");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [selected, setSelected] = useState<SelectedItem | null>(
    menuItems.find((item) => item.id === initialDish) ?? null,
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory =
        category === "all" || item.categoryId === category;
      const matchesSearch =
        !normalized ||
        item.name.toLocaleLowerCase().includes(normalized) ||
        item.description?.toLocaleLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  function updateCategory(nextCategory: string) {
    setCategory(nextCategory);
    const params = new URLSearchParams(searchParams.toString());
    if (nextCategory === "all") params.delete("category");
    else params.set("category", nextCategory);
    params.delete("dish");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function openDish(item: SelectedItem) {
    setSelected(item);
    const params = new URLSearchParams(searchParams.toString());
    params.set("dish", item.id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function closeDish() {
    setSelected(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("dish");
    router.replace(
      params.size ? `${pathname}?${params.toString()}` : pathname,
      { scroll: false },
    );
  }

  return (
    <div className="menu-explorer">
      <div className="menu-controls">
        <div className="search-wrap">
          <Search aria-hidden="true" size={19} />
          <label htmlFor="menu-search" className="sr-only">
            Search the menu by dish or ingredient
          </label>
          <Input
            id="menu-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes or ingredients"
          />
        </div>
        <div className="category-chips" aria-label="Menu categories">
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => updateCategory("all")}
          >
            All
          </button>
          {menu.categories.map((item) => (
            <button
              type="button"
              aria-pressed={category === item.id}
              onClick={() => updateCategory(item.id)}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
        <p className="menu-result-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "dish" : "dishes"}
        </p>
      </div>

      {filtered.length ? (
        <div className="menu-grid">
          {filtered.map((item) => (
            <article className="menu-card" key={item.id}>
              <button type="button" onClick={() => openDish(item)}>
                <span className="menu-card-copy">
                  <span className="menu-card-topline">
                    <span>{item.categoryName}</span>
                    <Sprout aria-hidden="true" size={16} />
                  </span>
                  <strong>{item.name}</strong>
                  <span className="menu-description">
                    {item.description ?? "A vegetarian favourite from our menu."}
                  </span>
                  <span className="menu-card-price">
                    {formatPrice(item.price, item.priceLabel)}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="menu-empty" role="status">
          <h2>No dishes found.</h2>
          <p>Try a different ingredient or reset the menu filters.</p>
          <Button
            onClick={() => {
              setQuery("");
              updateCategory("all");
            }}
          >
            Reset menu
          </Button>
        </div>
      )}

      <Dialog.Root
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) closeDish();
        }}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dish-dialog dish-dialog-compact">
            {selected && (
              <div className="dish-dialog-copy">
                <Dialog.Close asChild>
                  <button className="dialog-close" aria-label="Close dish details">
                    <X aria-hidden="true" size={22} />
                  </button>
                </Dialog.Close>
                <p className="kicker">{selected.categoryName}</p>
                <Dialog.Title>{selected.name}</Dialog.Title>
                <Dialog.Description>
                  {selected.description ??
                    "A vegetarian favourite from our printed menu."}
                </Dialog.Description>
                <strong className="dish-price">
                  {formatPrice(selected.price, selected.priceLabel)}
                </strong>
                {selected.categoryNotes.map((note) => (
                  <p className="dish-note" key={note}>
                    {note}
                  </p>
                ))}
                {selected.categoryOptions.map((option) => (
                  <div className="dish-option" key={option.name}>
                    <span>{option.name}</span>
                    <p>{option.values.join(" / ")}</p>
                  </div>
                ))}
                <p className="dish-note">
                  Ingredient, allergen, spice, and preparation-time details
                  require kitchen confirmation.
                </p>
                <a
                  href="/reservations"
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "w-fit",
                  )}
                >
                  Request a table
                </a>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
