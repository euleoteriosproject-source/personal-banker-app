import Link from "next/link";
import WhatsButton from "./WhatsButton";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
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
      </div>
    </header>
  );
}
