import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
import Facebook from "@/icons/Facebook";
import Hamburger from "@/icons/Hamburger";

const Header = () => {
  return (
    <header className="fixed w-full h-20 bg-black z-50 flex items-center justify-center p-10 text-white">
      <div className="flex flex-row items-center justify-between w-full w-[1040px]">
        <div className="">Home</div>
        <div className=" flex-row items-center gap-20 hidden lg:flex w-fit">
          <ul className="flex flex-row items-center gap-10 text-lg">
            <li>about</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
          <div className="flex flex-row gap-9">
            <Facebook />
            <Linkedin />
            <Instagram />
          </div>
        </div>
        <div className="block lg:hidden">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
