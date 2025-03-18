"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Share2 } from "lucide-react";

export default function RightQuotemaker() {
  const [chapter, setChapter] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (chapter === 2) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [chapter]);

  const handleNext = () => {
    if (name) {
      setLoading(true);
      let progressInterval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(progressInterval);
            setChapter(3);
            setLoading(false);
            return 100;
          }
          return oldProgress + 10;
        });
      }, 300);
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

  return (
    <div className="w-[500px] h-[800px] bg-gradient-to-b from-white to-[#f5f5f5] text-[#333333] p-8 border border-[#e0e0e0] rounded-[20px] flex flex-col items-center justify-between transition-all duration-500 relative shadow-2xl">
      {chapter === 1 ? (
        <>
          <p className="text-2xl font-light text-center mt-8 whitespace-pre-line leading-relaxed text-[#333333]">
            의미있는 명언으로{"\n"}하루를 시작하는건 어떨까요?
          </p>
          <div className="flex flex-col items-center mb-20">
            <div className="relative w-[200px] h-[200px] perspective-[1000px]">
              <div className="book-container absolute w-full h-full transform-style-3d animate-float">
                <div className="book-side absolute w-[50px] h-full bg-[#FF4F59] origin-left transform rotate-y-[90deg] translate-x-[25px] shadow-lg"></div>
                <div className="book-cover absolute w-full h-full bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] shadow-xl transform transition-transform duration-1000 hover:rotate-y-[-30deg] rounded-r-lg">
                  <div className="absolute inset-[10px] border-2 border-white/30 rounded-lg"></div>
                  <div className="absolute inset-0 bg-[url('/assets/book-pattern.png')] opacity-10"></div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-2xl font-bold text-white">DQ</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold p-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              Daily Quote
            </h2>
            <p className="text-sm text-[#666666] mt-2">Edited by hipster__egg</p>
          </div>
          <button
            className="bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium py-4 w-full rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setChapter(2)}
          >
            시작하기
          </button>
        </>
      ) : (
        <div
          className={`flex flex-col items-center justify-center flex-grow transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-8 left-8 flex items-center">
            <div className="relative w-[50px] h-[50px] perspective-[1000px]">
              <div className="book-container absolute w-full h-full transform-style-3d animate-float-small">
                <div className="book-side absolute w-[12px] h-full bg-[#FF4F59] origin-left transform rotate-y-[90deg] translate-x-[6px] shadow-lg"></div>
                <div className="book-cover absolute w-full h-full bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] shadow-xl transform transition-transform duration-1000 hover:rotate-y-[-30deg] rounded-r-sm">
                  <div className="absolute inset-[4px] border border-white/30 rounded-sm"></div>
                  <div className="absolute inset-0 bg-[url('/assets/book-pattern.png')] opacity-10"></div>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-bold text-white">DQ</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold ml-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
              Daily Quote
            </h2>
          </div>
          {chapter === 3 && (
            <div className="absolute top-8 right-8 z-50">
              <button
                onClick={handleShare}
                className="bg-white flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-[#f5f5f5] transition-all duration-300 shadow-md"
                style={{ width: "40px", height: "40px" }}
              >
                <Share2 size={20} className="text-[#333333]" />
              </button>
            </div>
          )}
          {chapter === 2 ? (
            <>
              {!loading && (
                <>
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-[200px] h-[200px] perspective-[1000px]">
                      <div className="book-container absolute w-full h-full transform-style-3d animate-float">
                        <div className="book-side absolute w-[40px] h-full bg-[#FF4F59] origin-left transform rotate-y-[90deg] translate-x-[20px] shadow-lg"></div>
                        <div className="book-cover absolute w-full h-full bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] shadow-xl transform transition-transform duration-1000 hover:rotate-y-[-30deg] rounded-r-lg">
                          <div className="absolute inset-[10px] border-2 border-white/30 rounded-lg"></div>
                          <div className="absolute inset-0 bg-[url('/assets/book-pattern.png')] opacity-10"></div>
                          <div className="flex items-center justify-center h-full">
                            <span className="text-2xl font-bold text-white">DQ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold p-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
                      Daily Quote
                    </h2>
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
                </>
              )}
              {loading && (
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-light text-center mb-6 whitespace-pre-line leading-relaxed text-[#333333]">
                    {name ? `${name}님의\n오늘의 명언 확인중..` : "오늘의 명언 확인중.."}
                  </p>
                  <div className="w-[250px] bg-[#e0e0e0] rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              <button
                className={`absolute bottom-8 bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] text-white text-lg font-medium py-3 rounded-xl w-[300px] transition-all duration-300 shadow-lg hover:shadow-xl ${
                  name && !loading ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNext}
                disabled={!name || loading}
              >
                {loading ? "로딩 중..." : "다음"}
              </button>
            </>
          ) : (
            <div className="relative flex flex-col items-center justify-start flex-grow w-full">
              <p className="text-2xl font-light text-center mt-20 whitespace-pre-line leading-relaxed text-[#333333]">
                {name}님을 위한 오늘의 명언
              </p>
              <div className="flex flex-col items-center mb-14 justify-center flex-grow w-full">
                <h2 className="text-4xl font-light text-center leading-relaxed text-[#333333]">
                  "성공은 작은 노력이 반복된 결과입니다."
                </h2>
                <p className="text-lg text-center mt-4 text-[#FF4F59]">- 헤르만 헤세</p>
              </div>
              <div className="absolute bottom-8">
                <div className="w-[400px] h-[250px] bg-white rounded-[20px] flex flex-col items-center justify-center p-6 shadow-xl border border-[#e0e0e0]">
                  <p className="text-[#333333] text-xl mb-6 font-light">헤르만 헤세가 쓴 책</p>
                    <div className="flex flex-row items-center space-x-6">
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-32 bg-gradient-to-b from-white to-[#f5f5f5] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"></div>
                            <p className="text-[#333333] mt-3 text-sm font-light">데미안</p>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-32 bg-gradient-to-b from-white to-[#f5f5f5] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"></div>
                            <p className="text-[#333333] mt-3 text-sm font-light">데미안</p>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-32 bg-gradient-to-b from-white to-[#f5f5f5] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"></div>
                            <p className="text-[#333333] mt-3 text-sm font-light">데미안</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}
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
      )}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate3d(0, 1, 0, 20deg); }
          50% { transform: translateY(-10px) rotate3d(0, 1, 0, 20deg); }
        }
        @keyframes float-small {
          0%, 100% { transform: translateY(0px) rotate3d(0, 1, 0, 20deg); }
          50% { transform: translateY(-3px) rotate3d(0, 1, 0, 20deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-small {
          animation: float-small 3s ease-in-out infinite;
        }
        .perspective-[1000px] {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
