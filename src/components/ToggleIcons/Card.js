import Image from "next/image";

const Card = ({ title, imgSrc, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="flex flex-col gap-10 py-10 px-7 justify-between align-center"
    >
      <div className="flex flex-row">
        <div className="text-3xl font-semibold relative text-white flex justify-center items-center w-full">
          <span className="">{title}</span>
        </div>
      </div>
      <div className=" relative flex flex-col gap-1">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt="AWS Cloud Practitioner Badge"
          className="w-full h-full"
        />
      </div>
    </a>
  );
};

export default Card;
