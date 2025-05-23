import Header from "./components/SubHeader";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";


export default function Quotes() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header /> {/* 헤더 추가 */}
      <div className="flex flex-1 pt-[80px] w-full">
        
        {/* LeftContent - 태블릿 이하에서는 숨김 */}
        <div className="w-1/2 flex justify-center items-center hidden lg:flex opacity-0 animate-[fade-in_0.5s_ease-out_forwards]">
          <LeftContent />
        </div>

        {/* RightContent - 항상 표시됨 */}
        <div className="w-full lg:w-1/2 flex justify-center items-center opacity-0 animate-[fade-in_0.5s_ease-out_0.3s_forwards]">
          <RightContent />
        </div>
        
      </div>
    </div>
  );
}
