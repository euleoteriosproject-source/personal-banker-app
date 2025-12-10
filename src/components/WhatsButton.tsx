type WhatsButtonProps = {
  href: string;
  label?: string;
  size?: "md" | "lg";
};

export default function WhatsButton({
  href,
  label = "Falar no WhatsApp",
  size = "md",
}: WhatsButtonProps) {
  const padding = size === "lg" ? "px-8 py-3.5 text-base" : "px-6 py-3";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] text-white shadow-lg shadow-[rgba(109,27,45,0.22)] transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(109,27,45,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${padding}`}
    >
      <span>🧭</span>
      <span className="font-semibold">{label}</span>
    </a>
  );
}
