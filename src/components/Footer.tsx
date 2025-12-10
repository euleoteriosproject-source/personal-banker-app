export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#e8e8e8] bg-white/80">
      <div className="container-shell flex flex-col gap-3 py-8 text-sm text-[var(--color-dark)]/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="script-title text-2xl text-[var(--color-primary)]">
            Marlise Paiva
          </p>
          <p className="font-medium text-[var(--color-dark)]/80">
            Personal Banker • Experiência premium e personalizada
          </p>
        </div>
        <p className="text-[var(--color-dark)]/60">
          © {year} Personal Banker. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
