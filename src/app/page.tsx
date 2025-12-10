import AboutSection from "@/components/AboutSection";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import WhatsButton from "@/components/WhatsButton";

const features = [
  {
    title: "Conexão direta com seu Banker",
    description:
      "Atendimento personalizado, humano e próximo para cada decisão financeira.",
  },
  {
    title: "Acesso às melhores ofertas de crédito",
    description:
      "Curadoria das opções mais vantajosas de acordo com seu momento e objetivos.",
  },
  {
    title: "Soluções seguras, personalizadas e confiáveis",
    description:
      "Estratégias claras e protegidas, pensadas sob medida para você ou sua empresa.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="section">
        <div className="container-shell space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                Benefícios
              </p>
              <h2 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
                Personalização financeira
              </h2>
              <p className="max-w-2xl text-[var(--color-dark)]/70">
                Clareza, confiança e acesso aos melhores caminhos para o seu
                momento financeiro, com acompanhamento próximo e elegante.
              </p>
            </div>
            <WhatsButton href="https://wa.me/5551999740402" label="WhatsApp imediato" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="section">
        <div className="container-shell flex flex-col items-center gap-6 rounded-3xl border border-[var(--color-primary)]/20 bg-gradient-to-r from-[var(--color-primary)]/08 via-white to-[var(--color-secondary)]/15 p-8 text-center shadow-[0_20px_60px_rgba(109,27,45,0.12)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Consultoria Premium
          </p>
          <h3 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Pronta para ouvir você
          </h3>
          <p className="max-w-3xl text-lg text-[var(--color-dark)]/80">
            Marque um contato personalizado para entender seu cenário e receber
            um plano claro, seguro e estratégico para sua vida financeira.
          </p>
          <WhatsButton
            href="https://wa.me/5551999740402"
            size="lg"
            label="Quero falar agora"
          />
        </div>
      </section>
    </div>
  );
}
