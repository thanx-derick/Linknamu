import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 py-10 dark:bg-black sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-10 rounded-3xl border-2 border-zinc-900 bg-white px-6 py-10 dark:border-zinc-100 dark:bg-black">
        <ProfileHeader
          name="Derick"
          bio="Material Design"
          avatarInitial="D"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
        <p className="text-zinc-400 dark:text-zinc-600">···</p>
      </div>
    </div>
  );
}
