import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-[#e8e8e8] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="relative h-full min-h-[340px] w-full sm:min-h-[380px]">
            <Image
              src="/images/marlise-profile.jpg"
              alt="Marlise Paiva"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-md">
            Personal Banker
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Sobre
          </p>
          <h2 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Cuidado, clareza e estratégia
          </h2>
          <p className="text-lg text-[var(--color-dark)]/80">
            Personal Banker especializada em crédito, investimentos e soluções
            financeiras inteligentes. Ajudo pessoas e empresas a tomarem
            decisões com clareza, segurança e estratégia, conectando você às
            melhores oportunidades do mercado.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/05 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            Certificação ANBIMA - CPA-10
          </div>
        </div>
      </div>
    </section>
  );
}
