"use client";

export default function RightBook4({ name }) {
  return (
    <div className="w-full max-w-[412px] aspect-[412/330] bg-[#ff4f59] rounded-[20px] flex items-center justify-center shadow-xl">
      <div className="w-[90%] h-[330px] bg-white rounded-[16px] flex flex-col items-center justify-center px-4 py-6">
        
        {/* 이름 문구 추가 */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-center mb-15">
          <span className="text-[#FF4F59] font-bold">{name}</span>
          <span className="text-[#333333]">님을 위한 오늘의 글</span>
        </p>


        {/* 인용 문장 */}
        <p className="max-w-[90%] text-center break-words text-sm sm:text-base md:text-lg text-neutral-700 font-light tracking-wide leading-relaxed md:leading-loose antialiased">
          “일찍이 그 어떤 사람도 완전히 자기 자신이 되어본 적은 없었다.<br/> 그럼에도 누구나 자기 자신이 되려고 노력한다.”
        </p>

        <hr className="w-[60%] border-t border-gray-300 my-4 mt-10" />

        {/* 작가 정보 */}
        <p className="text-sm text-gray-500">헤르만 헤세의 데미안</p>
      </div>
    </div>
  );
}
