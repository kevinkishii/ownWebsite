import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ComponentFinder from "@/components/ComponentFinder";
import yoshiiFitContent from "@/content/yoshiiFit";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const YoshiiFit = ({ content }) => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      {content?.map((item, idx) => {
        return <ComponentFinder {...item} key={`content-${idx}`} />;
      })}
    </main>
  );
};

export async function getStaticProps() {
  const content = yoshiiFitContent;

  return {
    props: {
      content,
    },
  };
}

export default YoshiiFit;
