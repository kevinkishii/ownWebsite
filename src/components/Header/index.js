import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
import Facebook from "@/icons/Facebook";
import Hamburger from "@/icons/Hamburger";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu.js";

const Header = () => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const handleClick = () => {
    setHamburgerState((previous) => !previous);
  };

  return (
    <header className="fixed w-full h-20 bg-black z-50 flex items-center justify-center p-10 text-white">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl">
        <Link href={"/"} className="text-xl lg:text-lg">
          Home
        </Link>
        <div className=" flex-row items-center gap-20 hidden lg:flex w-fit">
          <ul className="flex flex-row items-center gap-10 text-lg">
            <Link href="/about">about</Link>
            <Link href="/portfolio">portfolio</Link>
            <Link href="/contact">contact</Link>
          </ul>
          <div className="flex flex-row gap-9">
            <a
              href="https://www.facebook.com/kevin.ishii/"
              target="_black"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/kevinkishii/"
              target="_black"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/kevinishii/"
              target="_black"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <button className="block lg:hidden w-fit" onClick={handleClick}>
          <Hamburger color={hamburgerState ? "#757575" : "#ffffff"} />
        </button>
      </div>
      <HamburgerMenu hamburgerState={hamburgerState} />
    </header>
  );
};

export default Header;
