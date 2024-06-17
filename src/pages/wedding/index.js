import { Inter } from "next/font/google";
import ComponentFinder from "@/components/ComponentFinder";
import weddingContent from "@/content/wedding";

const inter = Inter({ subsets: ["latin"] });

const Wedding = ({ content }) => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between bg-[#CDBBB7] ${inter.className}`}
    >
      {content?.map((item, idx) => {
        return <ComponentFinder {...item} key={`content-${idx}`} />;
      })}
    </main>
  );
};

export async function getStaticProps() {
  const content = weddingContent;

  return {
    props: {
      content,
    },
  };
}

export default Wedding;
