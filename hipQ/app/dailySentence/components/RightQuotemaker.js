"use client";

import { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Share2, Info, Home, Download, Menu } from "lucide-react";
import InfoModal from "./InfoModal";
import RightBook1 from "./RightBook1";
import RightBook2 from "./RightBook2";
import RightLoading from "./RightLoading";
import RightBook4 from "./RightBook4";
import RightBookShelf from "./RightBookShelf";

export default function RightQuotemaker() {
  const [chapter, setChapter] = useState(1);
  const [animateBook, setAnimateBook] = useState(false);
  const [bookConfirmed, setBookConfirmed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (chapter === 1 || chapter === 2 || chapter === 3) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [chapter]);

  const resetToStart = () => {
    setChapter(1);
    setFadeOut(false);
    setFadeIn(true);
    setShowLoading(false);
    setName("");
    setBookConfirmed(false);
    setAnimateBook(false);
  };

  const handleNext = () => {
    if (name) {
      setShowLoading(true);
    }
  };
  

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("https://www.hipsteregg.com/")
        .then(() => {
          setShowAlert(true);
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 2500);
          setTimeout(() => setShowAlert(false), 3000);
        })
        .catch((err) => {
          console.error("클립보드 복사 실패:", err);
          setShowAlert(true);
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 2500);
          setTimeout(() => setShowAlert(false), 3000);
        });
    }
  };

  const handleDownload = () => {
    const target = document.getElementById("quote-container");
    if (!target) return;
  
    toPng(target, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "white",
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // 04
        const day = String(today.getDate()).padStart(2, "0"); // 24
        const formattedDate = `${month}${day}`; // "0424"
        link.download = `${formattedDate}-DailySentence.jpg`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("이미지 저장 중 오류 발생:", error);
      });
  };
  

  const handleStart = () => {
    setBookConfirmed(true);
    setAnimateBook(true);
    setFadeOut(true);
    setTimeout(() => setChapter(2), 500);
  };

  return (
    <div
    id="quote-container"
    className="w-full max-w-[400px] h-[700px] bg-gradient-to-b from-white to-[#f5f5f5] text-[#333333] p-8 border border-[#e0e0e0] rounded-[20px] flex flex-col items-center justify-between transition-all duration-500 relative shadow-2xl"
  >
  
        {chapter === 1 ? (
          <div
          className={`flex flex-col items-center justify-between h-full transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* ✅ 제목 묶음 */}
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              하루, 한 글
            </h2>
            <p className="text-sm text-[#888888] mt-1">Daily Sentence</p>
            <Info
                className="absolute top-[30px] right-[30px] w-5 h-5 text-gray-500 cursor-pointer block md:hidden"
                onClick={() => setIsModalOpen(true)}
              />
          </div>
        
          {/* ✅ 문장 - 간격 줄이기 위해 mt-6 정도로 설정 */}
          <div className="relative w-full mt-6">
            <p className="text-xl font-light text-center whitespace-pre-line leading-snug text-[#333333] relative">
              의미있는 글로{"\n"}하루를 시작하는건 어떨까요?
            </p>
          </div>
        
          <div className="flex justify-center items-center mt-6 mb-4">
            <RightBookShelf />
          </div>
        
          <button
            className="bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium py-4 w-full rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleStart}
          >
            시작하기
          </button>
        
          <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      
        
        ) : chapter === 2 ? (
          <div
            className={`flex flex-col items-center justify-center flex-grow transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            } relative w-full`}
          >
            <div className="absolute top-4 left-2 flex items-center">
              <div className="w-[30px] h-[45px] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-tr-sm rounded-br-sm flex items-center justify-center text-white font-bold">
                DS
              </div>
              <h2 className="text-xl font-bold ml-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
                Daily Sentence
              </h2>
            </div>

            {!showLoading && (
              <>
                <div className="flex flex-col items-center mb-6">
                  <RightBook2 animate={false} confirmed={true} />
                </div>
                <p className="text-xl font-light text-center mt-6 whitespace-pre-line leading-relaxed text-[#333333]">
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
                  className={`absolute bottom-8 w-[300px] h-[60px] text-white bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 dark:bg-[#FF4F59] dark:hover:bg-[#FF4F59] dark:focus:ring-red-800 inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                    name ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleNext}
                  disabled={!name}
                >
                  오늘의 글 확인하기
                </button>
              </>
            )}

          {showLoading && <RightLoading name={name} onComplete={() => setChapter(3)} />}

          </div>
        ) : chapter === 3 ? (
          <div
            className={`relative flex flex-col items-center justify-start flex-grow w-full transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              Daily Sentence
            </h2>
        
            <p className="text-2xl font-light text-center mt-4 whitespace-pre-line leading-relaxed text-[#333333]">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B]">{name}</span>님을 위한 오늘의 글
            </p>
        
            <div className="relative flex-grow w-full mt-4">
              <div
                className="absolute inset-x-0 flex items-center justify-center"
                style={{ top: "10px" }}
              >
                <RightBook4 />
              </div>
            </div>
        
            {/* 
            <div className="absolute bottom-13"> 
              <div className="max-w-[350px] w-full h-auto bg-transparent rounded-[20px] flex flex-col items-center justify-center p-6">
                <p className="text-[#333333] text-xl mb-2 font-light">헤르만 헤세의 대표작</p>
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
            */}
        
            {/* ✅ 새로운 버튼 영역 추가 */}
            <div className="absolute bottom-0 flex w-full px-4 space-x-4">
              <button
                onClick={resetToStart}
                className="flex-1 h-[60px] bg-white border border-[#e0e0e0] text-[#333333] text-lg font-medium rounded-[15px] shadow-md hover:bg-[#f9f9f9] transition-all duration-300"
              >
                홈으로
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 h-[60px] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium rounded-[15px] shadow-md hover:opacity-90 transition-all duration-300"
              >
                저장하기
              </button>
            </div>


        
            {/* ✅ 메뉴 버튼 단독 - Share2만 남김 */}
            <div className="absolute top-1 right-1 z-50">
              <button
                onClick={handleShare}
                className="bg-white flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300 shadow-md"
                style={{ width: "40px", height: "40px" }}
              >
                <Share2 size={20} className="text-[#333333]" />
              </button>
            </div>
          </div>
        ) : null}
        

        {/* ✅ 알림 메시지 (fade-in/out 적용) */}
        {showAlert && (
          <div
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Alert className="bg-white border-[#e0e0e0] shadow-xl">
              <Copy className="h-4 w-4 text-[#FF4F59]" />
              <AlertDescription className="text-[#333333]">
                클립보드에 복사되었습니다!
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
  );
}
