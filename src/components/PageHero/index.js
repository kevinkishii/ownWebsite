import Image from "next/image";
import Socials from "./Socials.js";

const PageHero = ({ title, intro, description, isFullScreen, socials }) => {
  return (
    <div
      className={`bg-black w-full flex items-center justify-center text-white py-24 px-16 ${
        isFullScreen && "h-screen"
      }`}
    >
      <div className="max-w-5xl	w-full flex lg:flex-row flex-col gap-16">
        <div className="w-full flex flex-col gap-10 w-full lg:w-1/2">
          {title && <h1 className="font-bold text-8xl">{title}</h1>}
          {intro && <div className="text-[#757575] text-3xl">{intro}</div>}
          {description && (
            <div className="text-white text-xl">{description}</div>
          )}
          {socials && <Socials socials={socials} />}
        </div>
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
          <Image
            src="/portfolio.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
