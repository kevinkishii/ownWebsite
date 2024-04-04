import { Inter } from "next/font/google";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <PageHero />
      <div className="bg-[#fafafa] h-[600px] w-full shadow-inner"></div>
    </main>
  );
}
