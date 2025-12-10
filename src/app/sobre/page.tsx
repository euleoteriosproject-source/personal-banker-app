import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhatsButton from "@/components/WhatsButton";

export default function SobrePage() {
  return (
    <div className="space-y-10">
      <section className="section">
        <div className="container-shell space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Sobre
          </p>
          <h1 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Elegância e confiança
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--color-dark)]/75">
            Personal Banker especializada em crédito, investimentos e soluções
            financeiras inteligentes. Ajudo pessoas e empresas a tomarem
            decisões com clareza, segurança e estratégia.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Certificação ANBIMA - CPA-10
          </div>
        </div>
      </section>

      <AboutSection />

      <ExperienceSection />

      <section className="section">
        <div className="container-shell flex flex-col items-center gap-4 rounded-3xl border border-[var(--color-primary)]/15 bg-white/80 p-8 text-center shadow-[0_20px_60px_rgba(109,27,45,0.1)] sm:p-10">
          <h3 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Vamos conversar?
          </h3>
          <p className="max-w-3xl text-lg text-[var(--color-dark)]/80">
            Encontre um caminho financeiro claro, personalizado e seguro para
            seus objetivos pessoais ou empresariais.
          </p>
          <WhatsButton href="https://wa.me/5551999740402" size="lg" />
        </div>
      </section>
    </div>
  );
}
