import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import SparkleObject from "@/components/SparkleObject";

const links = [
  { label: "GitHub", href: "https://github.com/thanx-derick" },
  { label: "Instagram", href: "https://www.instagram.com/derickty/" },
  { label: "Design", href: "https://www.instagram.com/_designty/" },
];

export default function Home() {
  return (
    <div className="bg-noise flex min-h-screen flex-col items-center bg-[linear-gradient(160deg,#f4f4f5_0%,#e4e4e7_28%,#d4d4d8_52%,#e8e8ea_75%,#f2f2f3_100%)] px-4 py-12 sm:py-20">
      <div className="flex w-full max-w-sm flex-col items-center gap-12 rounded-[2rem] border border-white/40 bg-[linear-gradient(165deg,rgba(196,196,201,0.55)_0%,rgba(161,161,170,0.4)_50%,rgba(196,196,201,0.5)_100%)] px-7 py-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-9 sm:py-14">
        <ProfileHeader
          name="Derick"
          bio="Material / Design / 3D"
          avatarUrl="/profile.jpg"
        />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
        <SparkleObject />
      </div>
    </div>
  );
}
