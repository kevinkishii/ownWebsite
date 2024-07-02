import Image from "next/image";
import WeddingItem from "./WeddingItem";

const WeddingGrid = ({ title, description, items }) => {
  return (
    <div className="w-full flex items-center justify-center py-20 px-7">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <Image
          className="w-[500px]"
          src={"/weddingSrc/kevinIsa.png"}
          alt={title}
          width={300}
          height={300}
        />
        <hr className="border-white border-solid border-[1px] w-1/2" />
        <h1 className="text-white text-6xl md:text-7xl font-bold text-[#835256]">
          {title}
        </h1>
        <div className="text-[#835256] list-disc flex flex-col max-w-[850px] text-justify">
          {description?.map((item, idx) => {
            if (typeof item === "string") {
              return <p key={`description-${idx}`}>{item}</p>;
            }
            if (item?.list) {
              return (
                <ul
                  key={`description-${idx}`}
                  className="list-disc list-inside"
                >
                  {item?.list?.map((listItem, listIndex) => {
                    return (
                      <li key={`description-${idx}-listItem-${listIndex}`}>
                        {listItem}
                      </li>
                    );
                  })}
                </ul>
              );
            }
            return null;
          })}
        </div>
        <div className="flex items-center justify-center w-full max-w-[1050px]">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-4">
            {items &&
              items?.map((item) => {
                return <WeddingItem {...item} key={`${item?.title}`} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingGrid;
