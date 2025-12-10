const experiences = [
  {
    role: "Gerente de Negócios Pessoa Jurídica",
    company: "Viacredi Alto Vale – Cooperativa Ailos",
    period: "Ago 2024 - Fev 2025 · Novo Hamburgo/RS",
    focus: [
      "Curadoria de crédito PJ com taxas competitivas e estrutura sob medida.",
      "Compliance e PLD em cooperativa; operações seguras e sustentáveis.",
    ],
  },
  {
    role: "Gerente de Negócios Pessoa Jurídica",
    company: "Viacredi",
    period: "Mar 2024 - Set 2024 · Blumenau/SC",
    focus: [
      "Expansão de carteira e aquisição consultiva com propostas customizadas.",
      "Análise de crédito e garantias alinhadas ao fluxo de caixa do cliente.",
    ],
  },
  {
    role: "Gerente de Negócios Empresas",
    company: "Itaú Unibanco",
    period: "Out 2022 - Jun 2023 · Novo Hamburgo/RS",
    focus: [
      "Portabilidade, renegociação e redução de custo total de crédito empresarial.",
      "Relacionamento executivo e cross-sell em soluções bancárias completas.",
    ],
  },
  {
    role: "Líder Especialista de Atendimento e Negócios Sênior",
    company: "SX Negócios",
    period: "Mar 2022 - Set 2022 · Novo Hamburgo/RS",
    focus: [
      "Playbook de vendas consultivas e treinamento de equipes para alta conversão.",
      "Gestão de pipeline, forecast e métricas de inadimplência.",
    ],
  },
  {
    role: "Gerente Empresas I",
    company: "Santander Brasil",
    period: "Mar 2021 - Fev 2022 · Porto Alegre/RS",
    focus: [
      "Crédito PJ, garantias e fluxo de caixa com visão 360º do negócio.",
      "Atendimento concierge para executivos e donos de empresas.",
    ],
  },
];

const strengths = [
  "CPA-10 ANBIMA: conformidade, ética e segurança em primeiro lugar.",
  "Curadoria imparcial de crédito e produtos financeiros — foco no seu objetivo.",
  "Diagnóstico rápido, resposta ágil no WhatsApp e plano claro de ação.",
  "Gestão de risco, PLD e estruturação de garantias para reduzir custo total.",
  "Playbook consultivo: relacionamento, educação financeira e cross-sell estratégico.",
];

export default function ExperienceSection() {
  return (
    <section className="section">
      <div className="container-shell space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Experiência profissional
            </p>
            <h2 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
              Autoridade em crédito e negócios
            </h2>
            <p className="max-w-3xl text-[var(--color-dark)]/75">
              Trajetória em bancos líderes e cooperativas, unindo curadoria de
              crédito, gestão de risco e atendimento concierge para empresas,
              profissionais e famílias.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {experiences.map((exp) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className="glass flex flex-col gap-3 border border-[#e8e8e8] bg-white/80 p-5 sm:p-6"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    {exp.role}
                  </p>
                  <p className="text-base font-semibold text-[var(--color-dark)]">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm font-medium text-[var(--color-dark)]/60">
                  {exp.period}
                </p>
              </div>
              <ul className="grid gap-2 text-[var(--color-dark)]/75 sm:grid-cols-2">
                {exp.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-2xl bg-[var(--color-primary)]/05 px-3 py-2 text-sm"
                  >
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass border border-[var(--color-primary)]/20 bg-white/90 p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Por que confiar
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {strengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-2xl bg-[var(--color-primary)]/04 px-3 py-2 text-sm text-[var(--color-dark)]/80"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
