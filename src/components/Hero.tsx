import Image from "next/image";
import WhatsButton from "./WhatsButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-dark)]/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[rgba(109,27,45,0.65)] via-[rgba(29,29,29,0.35)] to-[rgba(244,164,141,0.35)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Marlise Paiva - Personal Banker"
          fill
          priority
          className="object-cover object-center grayscale-[18%]"
        />
      </div>

      <div className="relative container-shell flex flex-col items-center justify-center gap-6 py-20 text-center sm:py-24">
        <p className="script-title text-4xl text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          Marlise Paiva
        </p>
        <p className="max-w-3xl text-lg text-white/90 sm:text-xl">
          Minha missão é ajudar você a tomar as melhores decisões financeiras
          com segurança, clareza e estratégia. Seja bem-vindo(a)!
        </p>
        <div className="pt-2">
          <WhatsButton
            href="https://wa.me/5551999740402"
            size="lg"
            label="Fale comigo no WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
