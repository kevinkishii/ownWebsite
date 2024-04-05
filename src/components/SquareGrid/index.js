import Image from "next/image";

const SquareGrid = ({ title, intro, description }) => {
  return (
    <div className="bg-black w-full flex items-center justify-center py-20 px-7">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <h1 className="text-white text-7xl font-bold">My expertise</h1>
        <div className="flex items-center justify-center w-full max-w-[1050px]">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] w-full">
            <div className="border-solid border-2 border-white flex flex-col gap-3 py-10 px-7 justify-center align-center">
              <div className="flex flex-row">
                <div>image</div>
                <div className="text-3xl font-semibold relative text-white">
                  <span className="relative z-0 after:absolute after:block after:h-2 after:bg-[#2C49D8] after:z-[-1] after:w-[100%] after:bottom-1">
                    Software
                  </span>
                  <br />
                  Development
                </div>
              </div>
              <div
                className=" relative flex flex-col gap-1
              "
              >
                <div className="opacity-[0.3] text-sm">{"<h3>"}</div>
                <div
                  className="text-base relative pl-9 after:h-[100%] after:absolute after:w-0 after:bg-white after:border-solid after:left-4 
              after:border-[0.1px] after:border-white after:bottom-0 after:opacity-[0.3]"
                >
                  Experienced in both functional and OOP: Dart, Python, Java,
                  JavaScript, TypeScript.
                </div>
                <div className="opacity-[0.3] text-sm">{"</h3>"}</div>
              </div>
            </div>
            <div className="border-solid border-2 border-white flex flex-col gap-3 py-10 px-7 justify-center align-center">
              <div className="flex flex-row">
                <div>image</div>
                <div className="text-3xl font-semibold relative text-white">
                  <span className="relative z-0 after:absolute after:block after:h-2 after:bg-[#2C49D8] after:z-[-1] after:w-[100%] after:bottom-1">
                    Software
                  </span>
                  <br />
                  Development
                </div>
              </div>
              <div
                className=" relative flex flex-col gap-1
              "
              >
                <div className="opacity-[0.3] text-sm">{"<h3>"}</div>
                <div
                  className="text-base relative pl-9 after:h-[100%] after:absolute after:w-0 after:bg-white after:border-solid after:left-4 
              after:border-[0.1px] after:border-white after:bottom-0 after:opacity-[0.3]"
                >
                  Experienced in both functional and OOP: Dart, Python, Java,
                  JavaScript, TypeScript.
                </div>
                <div className="opacity-[0.3] text-sm">{"</h3>"}</div>
              </div>
            </div>
            <div className="border-solid border-2 border-white flex flex-col gap-3 py-10 px-7 justify-center align-center">
              <div className="flex flex-row">
                <div>image</div>
                <div className="text-3xl font-semibold relative text-white">
                  <span className="relative z-0 after:absolute after:block after:h-2 after:bg-[#2C49D8] after:z-[-1] after:w-[100%] after:bottom-1">
                    Software
                  </span>
                  <br />
                  Development
                </div>
              </div>
              <div
                className=" relative flex flex-col gap-1
              "
              >
                <div className="opacity-[0.3] text-sm">{"<h3>"}</div>
                <div
                  className="text-base relative pl-9 after:h-[100%] after:absolute after:w-0 after:bg-white after:border-solid after:left-4 
              after:border-[0.1px] after:border-white after:bottom-0 after:opacity-[0.3]"
                >
                  Experienced in both functional and OOP: Dart, Python, Java,
                  JavaScript, TypeScript.
                </div>
                <div className="opacity-[0.3] text-sm">{"</h3>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareGrid;
