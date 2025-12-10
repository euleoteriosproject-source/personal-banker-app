"use client";

import { useMemo, useState } from "react";

const products = [
  "Financiamento Imobiliário",
  "Financiamento de Veículos",
  "Empréstimo com garantia",
  "Home Equity",
  "Capital de Giro para Empresas",
  "Portabilidade de Crédito",
  "Energia Solar Financiada",
  "Consultoria Financeira Premium",
];

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [produto, setProduto] = useState(products[0]);

  const whatsappLink = useMemo(() => {
    const base = "https://wa.me/5551999740402";
    const texto = `Olá, sou ${nome || "interessado(a)"}, quero informações sobre ${produto}. Meu WhatsApp: ${whatsapp || "informar"}.`;
    return `${base}?text=${encodeURIComponent(texto)}`;
  }, [nome, produto, whatsapp]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass space-y-5 p-6 sm:p-8"
      aria-label="Formulário de contato"
    >
      <div>
        <label className="block text-sm font-semibold text-[var(--color-dark)]">
          Nome
        </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="mt-2 w-full rounded-2xl border border-[#e8e8e8] bg-white px-4 py-3 text-[var(--color-dark)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[var(--color-dark)]">
          WhatsApp
        </label>
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-[#e8e8e8] bg-white px-4 py-3 text-[var(--color-dark)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
          placeholder="(XX) 9XXXX-XXXX"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[var(--color-dark)]">
          Produto desejado
        </label>
        <select
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-[#e8e8e8] bg-white px-4 py-3 text-[var(--color-dark)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
        >
          {products.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(109,27,45,0.25)] transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(109,27,45,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      >
        Enviar e abrir WhatsApp
      </button>
    </form>
  );
}
