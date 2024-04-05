import Image from "next/image";

const PageHero = ({ title, intro, description }) => {
  return (
    <div className="bg-black w-full flex items-center justify-center text-white py-24 px-16">
      <div className="max-w-5xl	w-full flex lg:flex-row flex-col gap-10">
        <div className="w-full flex flex-col gap-10 w-full lg:w-1/2">
          {title && <h1 className="font-bold text-8xl">{title}</h1>}
          {intro && <div className="text-[#757575] text-3xl">{intro}</div>}
          {description && (
            <div className="text-white text-xl">{description}</div>
          )}
        </div>
        <div className="w-1/2 rounded-xl overflow-hidden">
          <Image
            src="/portfolio.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
