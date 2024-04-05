import ComponentFinder from "@/components/ComponentFinder";
import Header from "@/components/Header";
import homeContent from "@/content/home";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ content }) => {
  console.log("content", content);
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      {content?.map((item, idx) => {
        return <ComponentFinder {...item} key={`content-${idx}`} />;
      })}
      <div className="bg-[#fafafa] h-[600px] w-full shadow-inner"></div>
    </main>
  );
};

export async function getStaticProps() {
  const content = homeContent;
  console.log("homeContent", homeContent);

  return {
    props: {
      content,
    },
  };
}

export default Home;
