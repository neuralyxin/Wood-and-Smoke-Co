"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { FaqAccordion } from "@/components/content/faq-accordion";
import { Input } from "@/components/ui/form-controls";
import { faqs } from "@/data/content";

export function FaqSearch() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return faqs;
    return faqs.filter(
      (item) =>
        item.question.toLocaleLowerCase().includes(normalized) ||
        item.answer.toLocaleLowerCase().includes(normalized) ||
        item.category.toLocaleLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="faq-search">
      <div className="search-wrap">
        <Search aria-hidden="true" size={19} />
        <label htmlFor="faq-search-input" className="sr-only">
          Search frequently asked questions
        </label>
        <Input
          id="faq-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search dining, allergies, delivery, or reservations"
        />
      </div>
      <p className="menu-result-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "answer" : "answers"}
      </p>
      {filtered.length ? (
        <FaqAccordion items={filtered} />
      ) : (
        <div className="menu-empty" role="status">
          <h2>No matching answer.</h2>
          <p>Try a simpler phrase or call the restaurant directly.</p>
        </div>
      )}
    </div>
  );
}
