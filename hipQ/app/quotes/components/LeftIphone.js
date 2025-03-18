import { Menu } from "lucide-react"; // 메뉴 아이콘 추가
import { MdBatteryFull } from "react-icons/md"; // 배터리 아이콘 추가
import Image from "next/image"; // 로고 이미지 사용 가능

export default function LeftIphone() {
    return (
        <div className="relative mt-10 !w-[380px] h-[800px] sm:w-[250px] sm:h-[600px] md:w-[300px] md:h-[700px] bg-white rounded-[40px] border-[6px] border-gray-200 shadow-xl overflow-hidden">
            
            {/* 화면 영역 */}
            <div className="relative w-full h-full bg-white rounded-[35px] shadow-inner flex flex-col justify-start items-center overflow-hidden">
                
                {/* 상단 흰색 바탕 + 중앙 정렬된 검은색 요소 */}
                <div className="bg-white w-[370px] h-[40px] rounded-t-lg overflow-hidden flex items-center justify-between px-4">
                    
                    {/* 현재 시간 (왼쪽) */}
                    <span className="text-black text-sm font-semibold">3 : 18</span>

                    {/* 중앙 정렬된 검은색 요소 */}
                    <div className="h-[25px] w-[100px] bg-gray-100 rounded-[20px]"></div>

                    {/* 배터리 아이콘 (오른쪽) */}
                    <div className="w-[30px] h-[20px] flex items-center justify-center">
                        <MdBatteryFull size={20} color="black" />
                    </div>

                </div>

                {/* 파란색 바탕에 Header 스타일 적용 */}
                <div className="bg-white w-[370px] h-[40px] flex items-center justify-between px-4">
                    
                    {/* 로고 영역 */}
                    <div className="flex items-center gap-2">
                        <Image src="/assets/logo.png" alt="logo" width={20} height={20} /> {/* 로고 */}
                        <div className="flex flex-col leading-tight">
                            <span className="text-black font-bold text-sm">hipQ</span> {/* 메인 텍스트 */}
                            <span className="text-gray-500 text-[10px]">hipster__egg</span> {/* 보조 텍스트 */}
                        </div>
                    </div>

                    {/* 메뉴 아이콘 */}
                    <Menu size={20} color="black" />
                </div>

                {/* 📌 추가된 입력 UI (화면 중앙) */}
                <div className="flex flex-col items-center justify-center flex-grow px-6 mb-20 text-center">
                    
                    <Image src="/assets/logo.png" alt="logo" width={200} height={200} />

                    {/* hipQ 로고 텍스트 */}
                    <h1 className="text-black text-3xl font-bold">
                        Daily<span className="text-[#FF4F59]">Quote</span>
                    </h1>

                    {/* 안내 문구 */}
                    <p className="text-black text-lg sm:text-xl font-semibold mt-10">
                        안녕하세요! <br /> 
                        당신을 어떻게 불러드릴까요? <br />  
                    </p>

                    {/* 입력창 모양의 div */}
                    <div className="mt-5 w-full max-w-[250px] h-12 bg-white text-black rounded-lg flex items-center justify-start px-4 border border-gray-200">
                        <span className="text-black">hipster__egg</span>
                    </div>

                    {/* 📌 추가된 버튼 모양의 div */}
                    <div className="mt-10 w-full max-w-[250px] h-12 bg-[#FF4F59] text-white font-semibold text-lg rounded-lg flex items-center justify-center cursor-pointer">
                        다음
                    </div>

                </div>

            </div>
        </div>
    );
}
