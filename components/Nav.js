"use client";

/**
 * Site-wide navigation bar. "use client" (above) is required because this
 * component uses useState to track whether the mobile menu is open —
 * anything with interactivity/state in Next.js's App Router needs that
 * directive at the top of the file.
 *
 * EDIT ME: change "Your Name" below, and add/remove <Link> entries in
 * navItems if you add more pages/sections.
 *
 * Note on links: "/#about" means "go to the home page, then jump to the
 * element with id=about". That works whether you're already on the home
 * page or clicking from /projects or a project detail page.
 */

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        {/* EDIT ME: your name / site brand, shown top-left */}
        <Link href="/" className="nav-brand">
          Hudson Hall
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          &#9776;
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
