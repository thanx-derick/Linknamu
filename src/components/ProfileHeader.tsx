type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/80 via-zinc-200/60 to-zinc-400/50 p-[3px] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
        <img
          src={avatarUrl}
          alt={name}
          className="h-28 w-28 rounded-full object-cover shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-6px_10px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div>
        <h1 className="font-display text-2xl tracking-wide text-zinc-800">
          {name}
        </h1>
        <p className="font-tagline mt-2 text-[11px] tracking-[0.12em] text-zinc-500 uppercase sm:text-xs sm:tracking-[0.2em]">
          {bio}
        </p>
      </div>
    </div>
  );
}
