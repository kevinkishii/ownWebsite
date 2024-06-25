import Image from "next/image";

const WeddingItem = ({ title, description, link, price, imgUrl }) => {
  return (
    <a
      href={link || "/wedding"}
      target="_blank"
      rel="noopener noreferrer"
      className="items-start h-full bg-[#E6DDDB] rounded-3xl border-solid border-2 border-white flex flex-col gap-3 py-10 px-7 justify-start hover:scale-105 duration-200"
    >
      <Image
        className="w-full aspect-square border-white border-solid border-[1px] object-cover"
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        onError={(e) => (e.target.srcset = "/wedding/kevinIsa.png")}
      />
      <div className=" relative flex flex-col gap-1">
        <div className="text-2xl font-semibold relative text-[#AF8F90]">
          {title}
        </div>
        <div className="text-white text-base text-[#AF8F90]">{description}</div>
        <div className="text-white text-xl text-[#AF8F90]">{price}</div>
      </div>
    </a>
  );
};

export default WeddingItem;
