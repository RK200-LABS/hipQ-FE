import LeftIphone from "./LeftIphone";
import LeftDescribe from "./LeftDescribe";
import LeftCard from "./LeftCard";

export default function LeftContent() {
    return (
        <div className="w-full max-w-[1200px] mx-auto p-6 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {/* 🔹 제목과 설명 (왼쪽 정렬) */}
            <div className="flex flex-col ml-24 text-left mb-6">
                <h2 className="text-[20px] sm:text-[25px] font-semibold text-[#FF313D]">
                    하루, 한 글
                </h2>
                <p className="text-[24px] sm:text-[28px] lg:text-[33px] font-black text-black mt-[10px]">
                    NFC를 태그하여 오늘의 글을 확인하세요
                </p>
            </div>

            {/* 🔹 Grid 레이아웃 */}
            <div className="
                grid grid-cols-2 grid-rows-2 gap-6 w-full
                max-[1800px]:grid-cols-1 max-[1800px]:grid-rows-3">
                
                {/* LeftIphone - 왼쪽에서 세로 2칸 차지 (1800px 이하에서는 첫 번째) */}
                <div className="row-span-2 flex justify-center items-center">
                    <LeftIphone />
                </div>
                
                {/* LeftDescribe - 오른쪽 위 1칸 (1800px 이하에서는 두 번째) */}
                <div className="flex justify-center items-center">
                    <LeftDescribe />
                </div>
                
                {/* LeftCard - 오른쪽 아래 1칸 (1800px 이하에서는 세 번째) */}
                <div className="flex justify-center items-center">
                    <LeftCard />
                </div>
            </div>
        </div>
    );
}
