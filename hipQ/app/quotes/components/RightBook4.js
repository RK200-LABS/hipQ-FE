"use client";

export default function RightBook4() {
  return (
    <div className="w-full max-w-[412px] aspect-[412/330] bg-[#ff4f59] rounded-[20px] flex items-center justify-center shadow-xl">
      <div className="w-[90%] h-[330px] bg-white rounded-[16px] flex flex-col items-center justify-center px-4 py-6">
      <p className="max-w-[90%] text-center break-words text-sm sm:text-base md:text-lg text-neutral-700 font-light tracking-wide leading-relaxed md:leading-loose antialiased">
        “일찍이 그 어떤 사람도 완전히 자기 자신이 되어본 적은 없었다. 그럼에도 누구나 자기 자신이 되려고 노력한다.” {/* 문장 들어올 자리 */}
      </p>


        <hr className="w-[60%] border-t border-gray-300 my-4 mt-10" />
        <p className="text-sm text-gray-500">헤르만 헤세의 데미안</p> {/* 작가 & 작품명 */}
      </div>
    </div>
  );
}
