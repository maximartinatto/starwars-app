import Image from "next/image";
import logo from "../../../../public/images/starwars_logo.png";
import Link from "next/link";
import { menuList } from "./menuList";
import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleSelected = (index: number) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };

  useEffect(() => {
    const newIndex = menuList.findIndex((item) => item.link === pathname);
    setActiveIndex(newIndex);
  }, [pathname]);

  return (
    <div className="navbar bg-[#0a0a0a] fixed top-0 left-0 z-20 ">
      <div className="navbar-start">
        <Link href="/">
          <Image src={logo} width={100} alt="Logo starwars" />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end" tabIndex={0}>
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className="menu menu-sm dropdown-content text-center mt-3 z-[1] shadow bg-black rounded-box w-52">
            {menuList.map((menu, index) => (
              <div key={index}>
                <NavbarItem
                  title={menu.title}
                  link={menu.link}
                  toggleSelected={() => toggleSelected(index)}
                  activeIndex={activeIndex}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="flex flex-row px-1">
          {menuList.map((menu, index) => (
            <div key={index}>
              <NavbarItem
                title={menu.title}
                link={menu.link}
                toggleSelected={() => toggleSelected(index)}
                activeIndex={activeIndex}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
