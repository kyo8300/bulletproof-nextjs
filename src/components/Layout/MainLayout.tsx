import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Links = [
  ["Best Albums", "/best-albums"],
  ["Discover", "/discover"],
  ["New Releases", "/releases"],
  ["Lists", "/lists"],
  ["Sign In", "/sign-in"],
];

const NavBar = () => (
  <nav className="hidden list-none tablet:block">
    <ul className="text-center bg-[#323232] h-[36px] leading-9 flex items-center justify-center">
      {Links.map(([title, url]) => (
        <li key={title} className="text-white px-[10px] text-[10px]">
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

type MobileHamburgerMenuProps = {
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileHamburgerMenu = ({
  hamburgerOpen,
  setHamburgerOpen,
}: MobileHamburgerMenuProps) => {
  return (
    <div className="tablet:hidden">
      <Hamburger
        toggled={hamburgerOpen}
        toggle={setHamburgerOpen}
        label="Nav menu"
      />
      {hamburgerOpen && (
        <div className="fixed top-[78px] left-0 w-full h-full z-30 bg-[#323232]">
          <div className="bg-white h-[62.5px] py-[15px] px-5">Search</div>
          <ul className="flex justify-center flex-col px-5">
            {Links.map(([title, url]) => (
              <li
                key={title}
                className="h-12 text-white text-xs py-[5px] border-b border-[#484848] flex items-center"
              >
                <Link href={url}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LogoHeader = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header className="py-[15px] px-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="text-4xl block">AOTY</a>
        </Link>
        <div className="hidden tablet:block">Search</div>
        <MobileHamburgerMenu
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      </div>
    </header>
  );
};

export const MainLayout = () => {
  return (
    <>
      <LogoHeader />
      <NavBar />
    </>
  );
};
