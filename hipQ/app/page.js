import Image from "next/image";
import MainHeader from "./components/MainHeader";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <div className="h-[3000px]"></div>
    </div>
  );
}
