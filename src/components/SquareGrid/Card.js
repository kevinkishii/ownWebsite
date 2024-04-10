import Image from "next/image";

const Card = ({ title, subTitle, description }) => {
  return (
    <div className="border-solid border-2 border-white flex flex-col gap-3 py-10 px-7 justify-center align-center">
      <div className="flex flex-row">
        <div>image</div>
        <div className="text-3xl font-semibold relative text-white">
          <span className="relative z-0 after:absolute after:block after:h-2 after:bg-[#2C49D8] after:z-[-1] after:w-[100%] after:bottom-1">
            {title}
          </span>
          <br />
          {subTitle}
        </div>
      </div>
      <div className=" relative flex flex-col gap-1">
        <div className="opacity-[0.3] text-white text-sm">{"<h3>"}</div>
        <div
          className="text-white text-base relative pl-9 after:h-[100%] after:absolute after:w-0 after:bg-white after:border-solid after:left-4 
            after:border-[0.1px] after:border-white after:bottom-0 after:opacity-[0.3]"
        >
          {description}
        </div>
        <div className="opacity-[0.3] text-white text-sm">{"</h3>"}</div>
      </div>
    </div>
  );
};

export default Card;
