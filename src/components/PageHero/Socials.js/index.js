import Image from "next/image";

const Socials = ({ socials }) => {
  return (
    <ul className="w-full flex flex-col md:grid md:grid-cols-[repeat(auto-fill,_minmax(50%,_1fr))] w-full">
      {socials?.map((item) => {
        return (
          <li
            className="p-3 text-lg font-semibold hover:opacity-80"
            key={`social-${item?.title}`}
          >
            <a href={item?.link} className="flex flex-row items-center gap-5 ">
              <Image
                src={item?.icon}
                alt={item?.iconAlt}
                width={50}
                height={50}
              />
              <p>{item?.title}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
