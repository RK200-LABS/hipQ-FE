import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";


export default function Quotes() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header /> {/* 헤더 추가 */}
      <div className="flex flex-1 pt-[80px] w-full">
        
        {/* LeftContent - 태블릿 이하에서는 숨김 */}
        <div className="w-1/2 flex justify-center items-center hidden lg:flex">
          <LeftContent />
        </div>

        {/* RightContent - 항상 표시됨 */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <RightContent />
        </div>
        
      </div>
    </div>
  );
}
