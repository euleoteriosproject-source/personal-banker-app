type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="glass h-full p-6 transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(109,27,45,0.18)]">
      <div className="mb-4 h-11 w-11 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]" />
      <h3 className="text-lg font-semibold text-[var(--color-dark)]">{title}</h3>
      <p className="mt-2 text-[var(--color-dark)]/75">{description}</p>
    </div>
  );
}
