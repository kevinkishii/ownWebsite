import LocationTag from "@/icons/LocationTag";
import { useState } from "react";

const Drawer = ({ title, description, period, location, link, tags }) => {
  const [isActive, setIsActive] = useState(false);

  const clickInteraction = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="rounded-md flex flex-col overflow-hidden">
      <button
        className={`${
          isActive ? "bg-blue-700" : "bg-[#490c86de]"
        } w-full flex flex-row justify-between items center px-5 md:px-10 py-4 font-semibold`}
        onClick={clickInteraction}
      >
        <div className="flex items-center">{title}</div>
        <div className="flex flex-row gap-10 ml-15 items-center">
          <div className="hidden md:block">{period}</div>
          <div className="opacity-75">{isActive ? "-" : "+"}</div>
        </div>
      </button>
      <div
        className={`bg-[#241d41] overflow-hidden duration-700 ease-in ${
          isActive ? "max-h-[500px] opacity-1" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full h-full py-5 px-10 flex flex-col-reverse md:flex-row gap-5 justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="flex flex-row gap-3 items-center">
                  <LocationTag color="#bb77ff" />
                  <div className="opacity-75">{location}</div>
                </div>
                <div className="opacity-75">{link?.text}</div>
              </div>
              <div className="">{description}</div>
            </div>
            <div className="flex flex-row gap-3">
              {tags &&
                tags.map((tag) => (
                  <div
                    className="bg-[#490c86de] px-4 py-2 rounded-full"
                    key={`${title}-${tag}`}
                  >
                    {tag}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center max-w-1/4">
            image
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
