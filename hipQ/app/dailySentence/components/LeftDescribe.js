export default function LeftDescribe() {
    return (
        <div className="w-[526px] h-[280px] bg-white text-black p-6 rounded-lg flex flex-col justify-center border border-gray-200">
            {/* 설명 내용 */}
            <h3 className="text-[10px] sm:text-[25px] font-blod text-[#FF313D] mt-2">설명</h3>
            <p className="text-lg mt-2 mb-10">
                1. NFC를 휴대폰에 태그한다. <br /> <br />
                2. 이름이나 닉네임을 입력 후 오늘의 글을 확인한다. <br /> <br />
                3. 글을 읽고 기분 좋은 하루를 보낸다.
            </p>
        </div>
    );
}
