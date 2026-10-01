"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/data/content";

export function FaqAccordion({
  items = faqs,
}: {
  items?: ReadonlyArray<{
    question: string;
    answer: string;
    category: string;
  }>;
}) {
  return (
    <Accordion.Root type="single" collapsible className="faq-list">
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Header>
            <Accordion.Trigger>
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" size={20} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div>
              <p>{item.answer}</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
