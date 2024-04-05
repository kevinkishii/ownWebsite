const PageHero = ({ title, intro, description }) => {
  return (
    <div className="mt-20 bg-white w-full flex items-center justify-center text-black py-24 px-16">
      <div className="max-w-5xl	w-full flex lg:flex-row flex-col gap-10">
        <div className="w-full flex flex-col gap-10 w-full lg:w-1/2">
          {title && <h1 className="font-bold text-8xl">{title}</h1>}
          {intro && <div className="text-[#757575] text-3xl">{intro}</div>}
          {description && (
            <div className="text-black text-xl">{description}</div>
          )}
        </div>
        <div className="w-1/2">Image</div>
      </div>
    </div>
  );
};

export default PageHero;
