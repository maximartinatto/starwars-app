import Link from "next/link";

interface INavItemProps {
  title: string;
  link: string;
  toggleSelected: () => void;
  activeIndex: number;
  isActive: boolean;
}

export default function NavbarItem({
  title,
  link,
  toggleSelected,
  activeIndex,
  isActive,
}: INavItemProps) {
  const textClass = `${
    isActive && activeIndex !== -1
      ? "text-yellow-400 text-lg font-medium p-2"
      : "text-white hover:text-yellow-200 text-lg font-medium p-2"
  }`;
  return (
    <div className={textClass}>
      <Link href={link} onClick={toggleSelected} className="items-center">
        {title}
      </Link>
    </div>
  );
}
