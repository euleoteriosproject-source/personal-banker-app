 "use client";

import { useState } from "react";
import Link from "next/link";
import WhatsButton from "./WhatsButton";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e8e8] bg-[#fff5f0]/90 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-lg font-semibold text-white shadow-lg shadow-[rgba(109,27,45,0.25)]">
            MP
          </div>
          <div className="leading-tight">
            <p className="script-title text-xl text-[var(--color-primary)]">
              Marlise Paiva
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-dark)]/70">
              Personal Banker
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-dark)]/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <WhatsButton href="https://wa.me/5551999740402" />
        </div>

        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-primary)]/20 bg-white text-[var(--color-primary)] shadow-sm transition hover:border-[var(--color-primary)]/40 hover:shadow-md md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 rounded bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e8e8e8] bg-[#fff5f0]/95 md:hidden">
          <div className="container-shell flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-xl px-3 py-2 text-[var(--color-dark)]/80 transition hover:bg-white hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
            <WhatsButton href="https://wa.me/5551999740402" />
          </div>
        </div>
      )}
    </header>
  );
}
