type ServiceCardProps = {
  title: string;
  summary: string;
  image: string;
  onSelect: () => void;
};

export default function ServiceCard({
  title,
  summary,
  image,
  onSelect,
}: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group h-full overflow-hidden rounded-3xl border border-[#e8e8e8] bg-white text-left shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(109,27,45,0.15)]"
    >
      <div
        className="h-40 w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-[var(--color-dark)]">
          {title}
        </h3>
        <p className="text-[var(--color-dark)]/70">{summary}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
          Saiba mais
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );
}
