import SubHeader from "./components/SubHeader";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";


export default function Quotes() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <SubHeader /> {/* 헤더 추가 */}
      <div className="flex flex-1 w-full">
        
        {/* LeftContent - 태블릿 이하에서는 숨김 */}
        <div className="w-1/2 flex justify-center items-center hidden lg:flex">
          <LeftContent />
        </div>

        {/* RightContent - 항상 표시됨 */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-start md:items-center"
          style={{ height: "calc(100vh - 60px)" }} // 60px는 SubHeader 높이
        >
          <RightContent />
        </div>




        
      </div>
    </div>
  );
}
