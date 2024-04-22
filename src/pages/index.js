import ComponentFinder from "@/components/ComponentFinder";
import Header from "@/components/Header";
import homeContent from "@/content/home";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ content }) => {
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
  const content = homeContent;

  return {
    props: {
      content,
    },
  };
}

export default Home;
