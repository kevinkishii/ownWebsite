import { Inter } from "next/font/google";
import ComponentFinder from "@/components/ComponentFinder";
import weddingContent from "@/content/wedding";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

const Wedding = ({ content, metadata }) => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between bg-[#CDBBB7] ${inter.className}`}
    >
      <NextSeo {...metadata} />
      {content?.map((item, idx) => {
        return <ComponentFinder {...item} key={`content-${idx}`} />;
      })}
    </main>
  );
};

export async function getStaticProps() {
  const { content, metadata = {} } = weddingContent;

  return {
    props: {
      content,
      metadata,
    },
  };
}

export default Wedding;
