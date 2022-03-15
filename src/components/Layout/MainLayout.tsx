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
  <nav className='hidden list-none tablet:block'>
    <ul className='flex h-[36px] items-center justify-center bg-[#323232] text-center leading-9'>
      {Links.map(([title, url]) => (
        <li key={title} className='px-[10px] text-[10px] text-white'>
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
    <div className='tablet:hidden'>
      <Hamburger
        toggled={hamburgerOpen}
        toggle={setHamburgerOpen}
        label='Nav menu'
      />
      {hamburgerOpen && (
        <div className='fixed top-[78px] left-0 z-30 h-full w-full bg-[#323232]'>
          <div className='h-[62.5px] bg-white py-[15px] px-5'>Search</div>
          <ul className='flex flex-col justify-center px-5'>
            {Links.map(([title, url]) => (
              <li
                key={title}
                className='flex h-12 items-center border-b border-[#484848] py-[5px] text-xs text-white'
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
    <header className='py-[15px] px-5'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <a className='block text-4xl'>AOTY</a>
        </Link>
        <div className='hidden tablet:block'>Search</div>
        <MobileHamburgerMenu
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      </div>
    </header>
  );
};

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <LogoHeader />
      <NavBar />
      {children}
    </>
  );
};
