import Image from "next/image";
import Card from "./Card";

const SquareGrid = ({ title, cards }) => {
  return (
    <div className="bg-black w-full flex items-center justify-center py-20 px-7 lg:animate-show-on-scroll lg:[animation-timeline:view(block)] lg:[animation-range:_cover_0%_entry-crossing_120%]">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <h1 className="text-white text-6xl md:text-7xl font-bold">{title}</h1>
        <div className="flex items-center justify-center w-full max-w-[1050px]">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] w-full">
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

export default SquareGrid;
