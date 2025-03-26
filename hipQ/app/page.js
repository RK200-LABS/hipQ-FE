import Image from "next/image";
import Header
 from "./components/MainHeader";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[3000px]"></div>
    </div>
  );
}
