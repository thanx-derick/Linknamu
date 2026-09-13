type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarInitial,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-zinc-900 text-3xl font-semibold text-zinc-900 dark:border-zinc-100 dark:text-zinc-100">
        {avatarInitial}
      </div>
      <div>
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {name}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
