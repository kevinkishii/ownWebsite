import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ComponentFinder from "@/components/ComponentFinder";
import contactContent from "@/content/contact";

const inter = Inter({ subsets: ["latin"] });

const Contact = ({ content }) => {
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
  const content = contactContent;

  return {
    props: {
      content,
    },
  };
}

export default Contact;
