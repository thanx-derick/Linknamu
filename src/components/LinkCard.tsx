type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-tagline flex h-14 w-full items-center justify-center rounded-2xl border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.55),rgba(228,228,231,0.2)_45%,rgba(255,255,255,0.4))] text-sm tracking-[0.08em] text-zinc-700 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.15),0_0_18px_-4px_rgba(255,255,255,0.6)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:text-zinc-900 hover:shadow-[0_6px_20px_-6px_rgba(0,0,0,0.2),0_0_28px_-2px_rgba(255,255,255,0.85)]"
    >
      {label}
    </a>
  );
}
