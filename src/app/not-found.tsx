import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="section-shell">
        <p className="font-display not-found-code">404</p>
        <h1 className="page-title">This table is empty.</h1>
        <p>
          The page may have moved, but the menu and reservation request are
          still ready.
        </p>
        <div>
          <Link href="/" className={buttonVariants({ variant: "primary" })}>
            Return home
          </Link>
          <Link href="/menu" className={buttonVariants({ variant: "secondary" })}>
            Explore menu
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link
            href="/reservations"
            className={buttonVariants({ variant: "secondary" })}
          >
            Request a table
          </Link>
        </div>
      </div>
    </main>
  );
}
