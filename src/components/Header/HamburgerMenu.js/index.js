import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
import Facebook from "@/icons/Facebook";
import Hamburger from "@/icons/Hamburger";
import { useState } from "react";
import Link from "next/link";
import React from "react";

const HamburgerMenu = ({ hamburgerState }) => {
  return (
    <div
      className={`fixed bg-black top-20 w-full flex-col lg:hidden text-2xl origin-top flex overflow-hidden ${
        hamburgerState
          ? "h-auto animate-open-hamburger"
          : "animate-close-hamburger"
      }`}
    >
      <Link
        href="/about"
        className="w-full h-24 flex justify-center items-center text-center border-solid border-[1px] border-[#363636]"
      >
        about
      </Link>
      <Link
        href="/portfolio"
        className="w-full h-24 flex justify-center items-center text-center border-solid border-[1px] border-[#363636]"
      >
        portfolio
      </Link>
      <Link
        href="/contact"
        className="w-full h-24 flex justify-center items-center text-center border-solid border-[1px] border-[#363636]"
      >
        contact
      </Link>
      <div className="flex flex-row h-24 items-center justify-center">
        <div className="flex flex-row gap-9">
          <a
            href="https://www.facebook.com/kevin.ishii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/kevinkishii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/kevinishii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
