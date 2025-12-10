"use client";

import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import WhatsButton from "@/components/WhatsButton";

type Product = {
  title: string;
  summary: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Financiamento Imobiliário",
    summary: "As melhores taxas e prazos para conquistar seu imóvel.",
    description:
      "Analisamos bancos, linhas e seguros para estruturar um financiamento imobiliário que respeita seu fluxo de caixa, com prazos e taxas competitivas.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Financiamento de Veículos",
    summary: "Condições inteligentes para seu próximo carro.",
    description:
      "Curadoria de taxas e modalidades (CDC, leasing) para você dirigir o que deseja com previsibilidade e segurança.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Empréstimo com garantia",
    summary: "Linhas com juros menores utilizando seus ativos.",
    description:
      "Estruturamos operações com garantia para reduzir custo de capital e preservar seu planejamento.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Home Equity",
    summary: "Use seu imóvel para levantar recursos de forma eficiente.",
    description:
      "Avaliação completa para liberar capital mantendo sua segurança patrimonial, com taxas competitivas.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Capital de Giro para Empresas",
    summary: "Liquidez estratégica para seu negócio.",
    description:
      "Conectamos sua empresa às melhores linhas de giro para sustentar crescimento e operações.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Portabilidade de Crédito",
    summary: "Migre seu contrato e reduza o custo total.",
    description:
      "Revisamos contratos atuais e buscamos alternativas mais vantajosas, com transparência total.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Energia Solar Financiada",
    summary: "Invista em energia limpa com financiamento sob medida.",
    description:
      "Projetos de energia solar financiados com condições que equilibram investimento e economia.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Consultoria Financeira Premium",
    summary: "Planejamento completo para pessoas e empresas.",
    description:
      "Atendimento consultivo para estrutura patrimonial, crédito e investimentos com visão integrada.",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProdutosPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  const whatsappLink = selected
    ? `https://wa.me/5551999740402?text=${encodeURIComponent(
        `Olá, quero saber mais sobre ${selected.title}.`
      )}`
    : "#";

  return (
    <section className="section">
      <div className="container-shell space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Produtos
          </p>
          <h1 className="script-title text-4xl text-[var(--color-primary)] sm:text-5xl">
            Soluções sob medida
          </h1>
          <p className="mx-auto max-w-3xl text-[var(--color-dark)]/75">
            Selecione um produto para ver detalhes e falar diretamente via
            WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ServiceCard
              key={product.title}
              title={product.title}
              summary={product.summary}
              image={product.image}
              onSelect={() => setSelected(product)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xl rounded-3xl border border-[#e8e8e8] bg-white p-6 shadow-[0_28px_80px_rgba(0,0,0,0.25)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                  {selected.title}
                </p>
                <h2 className="script-title text-3xl text-[var(--color-primary)]">
                  Detalhes
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full bg-[var(--color-light)] px-3 py-1 text-sm font-semibold text-[var(--color-dark)]/70 transition hover:bg-[var(--color-secondary)]/40"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>
            <p className="mt-4 text-[var(--color-dark)]/80">
              {selected.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsButton href={whatsappLink} label="Quero saber mais → WhatsApp" />
              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-[#e8e8e8] px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
