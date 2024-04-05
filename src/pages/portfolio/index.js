import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ComponentFinder from "@/components/ComponentFinder";
import portfolioContent from "@/content/porfolio";

const inter = Inter({ subsets: ["latin"] });

const PortFolio = ({ content }) => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      {content?.map((item, idx) => {
        return <ComponentFinder {...item} key={`content-${idx}`} />;
      })}
      <div className="bg-black h-[600px] w-full shadow-inner"></div>
    </main>
  );
};

export async function getStaticProps() {
  const content = portfolioContent;

  return {
    props: {
      content,
    },
  };
}

export default PortFolio;
