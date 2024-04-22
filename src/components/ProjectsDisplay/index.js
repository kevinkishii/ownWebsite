import Image from "next/image";

const ProjectsDisplay = ({ title, mainProject, featuredProjects }) => {
  return (
    <div className="bg-black w-full flex items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <h1 className="text-white text-6xl md:text-7xl font-bold">{title}</h1>
        <div
          className={`bg-black w-full flex flex-col lg:flex-row p-10 gap-10`}
        >
          {mainProject && (
            <div className="group w-full lg:w-3/5 rounded-lg flex flex-col gap-8 h-fit duration-500 hover:bg-[#1e2d3b]">
              <div className="overflow-hidden">
                <Image
                  src={mainProject?.image?.src}
                  width={1000}
                  height={1000}
                  alt={mainProject?.image?.alt}
                  className="w-full h-[400px] sm:h-[700px] object-cover object-center duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2 px-5 pb-10">
                <div className="flex flex-row text-3xl font-bold">
                  {mainProject?.title}
                </div>
                <div className="flex flex-row">{mainProject?.description}</div>
              </div>
            </div>
          )}
          <div className="w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col gap-10">
            {featuredProjects &&
              featuredProjects?.map((project, idx) => {
                return (
                  <div
                    key={`featured-project-${idx}`}
                    className="group flex flex-col gap-8 h-fit duration-500 hover:bg-[#1e2d3b]"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={project?.image?.src}
                        width={300}
                        height={300}
                        alt={project?.image?.alt}
                        className="w-full h-full object-cover object-center duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-2 px-5 pb-10">
                      <div className="flex flex-row text-3xl font-bold">
                        {project?.title}
                      </div>
                      <div className="flex flex-row">
                        {project?.description}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
