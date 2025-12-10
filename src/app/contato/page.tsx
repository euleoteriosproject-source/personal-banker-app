import ContactForm from "@/components/ContactForm";

export default function ContatoPage() {
  return (
    <section className="section">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Contato
          </p>
          <h1 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Vamos criar seu plano
          </h1>
          <p className="text-lg text-[var(--color-dark)]/80">
            Preencha os dados e fale direto comigo no WhatsApp. Atendimento
            consultivo, humanizado e estratégico para o seu momento.
          </p>
          <div className="rounded-2xl border border-[var(--color-primary)]/10 bg-white p-4 text-sm font-semibold text-[var(--color-primary)]">
            Certificação ANBIMA - CPA-10
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
