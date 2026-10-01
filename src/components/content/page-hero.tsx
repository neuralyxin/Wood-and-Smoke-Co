import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  title,
  description,
  image = "/images/hero-poster.png",
  children,
}: {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="page-hero-media" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="section-shell page-hero-content">
        <h1 className="page-title">{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </header>
  );
}
