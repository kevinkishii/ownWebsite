import Drawer from "./Drawer";

const VerticalDrawer = ({ title, drawers }) => {
  return (
    <div className="text-white w-full flex items-center justify-center py-20 px-7 animate-show-on-scroll [animation-timeline:view(block)] [animation-range:_cover_0%_entry-crossing_100%]">
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-3xl">
        <h1 className="text-white text-6xl md:text-7xl font-bold text-center">
          {title}
        </h1>
        <div className="flex items-center justify-center w-full">
          <div className="w-full flex flex-col gap-5">
            {drawers &&
              drawers?.map((drawer) => {
                return <Drawer {...drawer} key={`${drawer?.title}`} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalDrawer;
