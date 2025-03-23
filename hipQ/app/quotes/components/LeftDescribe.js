export default function LeftDescribe() {
    return (
        <div className="w-[526px] h-[280px] bg-white text-black p-6 rounded-lg flex flex-col justify-center border border-gray-200">
            {/* 설명 내용 */}
            <h3 className="text-[10px] sm:text-[25px] font-blod text-[#FF313D] mb-5">설명</h3>
            <p className="text-lg mb-15">
                1. NFC를 휴대폰에 태그한다. <br /> <br />
                2. 이름이나 닉네임을 입력 후 소설 속 좋은 문장을 확인한다. <br /> <br />
                3. 좋은 문장을 친구들과 공유한다.
            </p>
        </div>
    );
}
