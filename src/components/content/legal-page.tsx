import { PageHero } from "@/components/content/page-hero";

export function LegalPage({
  title,
  description,
  effectiveDate,
  sections,
}: {
  title: string;
  description: string;
  effectiveDate: string;
  sections: ReadonlyArray<{
    id: string;
    title: string;
    body: readonly string[];
  }>;
}) {
  return (
    <main id="main-content">
      <PageHero title={title} description={description} />
      <div className="section-shell legal-layout section-pad">
        <aside className="legal-toc">
          <p>{effectiveDate}</p>
          <nav aria-label="Page contents">
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="legal-copy">
          {sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
