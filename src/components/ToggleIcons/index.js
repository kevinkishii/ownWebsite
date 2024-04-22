import Image from "next/image";
import Card from "./Card";

const ToggleIcons = ({ title, cards }) => {
  return (
    <div className="text-white w-full flex items-center justify-center py-20 px-7 animate-show-on-scroll [animation-timeline:view(-30%)] [animation-range:_cover_0%_entry-crossing_100%]">
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-3xl">
        <h1 className="text-white text-6xl md:text-7xl font-bold text-center">
          {title}
        </h1>
        <div className="flex items-center justify-center w-full max-w-[1050px]">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full">
            {cards &&
              cards?.map((card) => {
                return <Card {...card} key={`${card?.title}`} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleIcons;
