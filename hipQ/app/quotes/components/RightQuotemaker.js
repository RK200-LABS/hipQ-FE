"use client";

import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Share2, Info } from "lucide-react";
import RightModal from "./RightModal";
import RightBook1 from "./RightBook1";
import RightBook2 from "./RightBook2";
import RightLoading from "./RightLoading";
import RightBook4 from "./RightBook4";

export default function RightQuotemaker() {
  const [chapter, setChapter] = useState(1);
  const [animateBook, setAnimateBook] = useState(false);
  const [bookConfirmed, setBookConfirmed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // When chapter changes to 2 or 3, trigger fade-in effect
  useEffect(() => {
    if (chapter === 2 || chapter === 3) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [chapter]);

  // "다음" 버튼 클릭 시 로딩 화면 표시
  const handleNext = () => {
    if (name) {
      setShowLoading(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("http://localhost:3000/quotes")
        .then(() => {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
        })
        .catch((err) => {
          console.error("클립보드 복사 실패:", err);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
        });
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  // 시작하기 버튼 클릭 시 챕터2로 전환
  const handleStart = () => {
    setBookConfirmed(true);
    setAnimateBook(true);
    setFadeOut(true);
    setTimeout(() => setChapter(2), 500);
  };

  return (
    <div className="w-[500px] h-[800px] bg-gradient-to-b from-white to-[#f5f5f5] text-[#333333] p-8 border border-[#e0e0e0] rounded-[20px] flex flex-col items-center justify-between transition-all duration-500 relative shadow-2xl">
      {chapter === 1 ? (
        <div
          className={`flex flex-col items-center justify-between h-full transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative w-full">
            <p className="text-2xl font-light text-center mt-8 whitespace-pre-line leading-relaxed text-[#333333] relative">
              의미있는 명언으로{"\n"}하루를 시작하는건 어떨까요?
              <Info
                className="absolute top-[-10px] right-[-10px] w-5 h-5 text-gray-500 cursor-pointer block md:hidden"
                onClick={() => setIsModalOpen(true)}
              />
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow">
            <RightBook1 animate={animateBook} confirmed={bookConfirmed} />
          </div>
          <button
            className="bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium py-4 w-full rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleStart}
          >
            시작하기
          </button>
          <RightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      ) : chapter === 2 ? (
        <div
          className={`flex flex-col items-center justify-center flex-grow transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          } relative w-full`}
        >
          <div className="absolute top-4 left-8 flex items-center">
            <div className="w-[40px] h-[60px] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-tr-sm rounded-br-sm flex items-center justify-center text-white font-bold">
              DQ
            </div>
            <h2 className="text-2xl font-bold ml-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              Daily Quote
            </h2>
          </div>

          {!showLoading && (
            <>
              <div className="flex flex-col items-center mb-6">
                <RightBook2 animate={false} confirmed={true} />
              </div>
              <p className="text-2xl font-light text-center mt-6 whitespace-pre-line leading-relaxed text-[#333333]">
                안녕하세요!{"\n"}당신을 어떻게 불러드릴까요?
              </p>
              <input
                type="text"
                className="mt-6 p-3 border border-[#e0e0e0] rounded-xl text-[#333333] w-[300px] bg-white focus:outline-none focus:border-[#FF4F59] transition-all duration-300"
                placeholder="이름 혹은 닉네임"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className={`absolute bottom-8 bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium py-3 rounded-xl w-[300px] transition-all duration-300 shadow-lg hover:shadow-xl ${
                  name ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNext}
                disabled={!name}
              >
                다음
              </button>
            </>
          )}

          {showLoading && <RightLoading onComplete={() => setChapter(3)} />}

          {showAlert && (
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
              <Alert className="bg-white border-[#e0e0e0] shadow-xl">
                <Copy className="h-4 w-4 text-[#FF4F59]" />
                <AlertDescription className="text-[#333333]">
                  클립보드에 복사되었습니다!
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      ) : chapter === 3 ? (
        <div
          className={`relative flex flex-col items-center justify-start flex-grow w-full transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-4 left-8 flex items-center">
            <div className="w-[40px] h-[60px] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-tr-sm rounded-br-sm flex items-center justify-center text-white font-bold">
              DQ
            </div>
            <h2 className="text-2xl font-bold ml-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              Daily Quote
            </h2>
          </div>

          <p className="text-2xl font-light text-center mt-25 whitespace-pre-line leading-relaxed text-[#333333]">
            {name}님을 위한 오늘의 명언
          </p>
          {/* RightBook4를 감싸는 컨테이너에 top -50px를 적용하여 조금 더 위에 위치시킴 */}
          <div className="relative flex-grow w-full">
            <div
              className="absolute inset-x-0 flex items-center justify-center"
              style={{ top: "50px" }}
            >
              <RightBook4 />
            </div>
          </div>
          <div className="absolute bottom-[-6]">
            <div className="max-w-[350px] w-full h-auto bg-transparent rounded-[20px] flex flex-col items-center justify-center p-6">
              <p className="text-[#333333] text-xl mb-2 font-light">
                헤르만 헤세가 쓴 책
              </p>
              <div className="flex flex-row items-center space-x-6 overflow-x-auto">
                {["데미안", "싯다르타", "유리알 유희"].map((book, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="w-24 h-32 bg-gradient-to-b from-white to-[#f5f5f5] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"></div>
                    <p className="text-[#333333] mt-3 text-sm font-light">{book}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 z-50">
            <button
              onClick={handleShare}
              className="bg-white flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300 shadow-md"
              style={{ width: "40px", height: "40px" }}
            >
              <Share2 size={20} className="text-[#333333]" />
            </button>
          </div>
          {showAlert && (
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
              <Alert className="bg-white border-[#e0e0e0] shadow-xl">
                <Copy className="h-4 w-4 text-[#FF4F59]" />
                <AlertDescription className="text-[#333333]">
                  클립보드에 복사되었습니다!
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
