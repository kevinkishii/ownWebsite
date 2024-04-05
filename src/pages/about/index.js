import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ComponentFinder from "@/components/ComponentFinder";
import aboutContent from "@/content/about";

const inter = Inter({ subsets: ["latin"] });

const About = ({ content }) => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      <div className="w-full h-full mt-20 bg-black">
        {content?.map((item, idx) => {
          return <ComponentFinder {...item} key={`content-${idx}`} />;
        })}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const content = aboutContent;

  return {
    props: {
      content,
    },
  };
}

export default About;
