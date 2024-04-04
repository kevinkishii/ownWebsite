import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const PortFolio = () => {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="mt-20 bg-white h-[600px] w-full"></div>
      <div className="bg-[#fafafa] h-[600px] w-full shadow-inner"></div>
    </main>
  );
};

export default PortFolio;
