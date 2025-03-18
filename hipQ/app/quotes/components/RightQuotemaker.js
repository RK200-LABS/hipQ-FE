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
            setChapter(3); // 챕터 3으로 이동
            setLoading(false);
            return 100;
          }
          return oldProgress + 10;
        });
      }, 300);
    }
  };

  const handleShare = () => {
    console.log("Share 버튼 클릭됨");
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
      // navigator.clipboard 지원하지 않는 경우
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="w-[500px] h-[800px] bg-black text-white p-6 border border-[#222222] rounded-[15px] flex flex-col items-center justify-between transition-all duration-500 relative">
      {chapter === 1 ? (
        <>
          <p className="text-xl font-semibold text-center mt-6 whitespace-pre-line">
            의미있는 명언으로{"\n"}하루를 시작하는건 어떨까요?
          </p>
          <div className="flex flex-col items-center mb-20">
            <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
            <h2 className="text-3xl font-bold p-2 tracking-wider">
              <span className="text-white">Daily</span>
              <span className="text-[#FF4F59]">Quote</span>
            </h2>
            <p className="text-sm text-[#697077] mt-1">Edited by hipster__egg</p>
          </div>
          <button
            className="bg-[#FF4F59] text-white text-lg font-medium py-4 w-full rounded-lg hover:opacity-80 transition"
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
          {/* 로고 및 제목 */}
          <div className="absolute top-6 left-6 flex items-center">
            <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
            <h2 className="text-2xl font-bold ml-2 tracking-wider">
              <span className="text-white">Daily</span>
              <span className="text-[#FF4F59]">Quote</span>
            </h2>
          </div>
          {/* 챕터 3에서 공유하기 버튼 */}
          {chapter === 3 && (
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={handleShare}
                className="bg-black flex items-center justify-center p-2 rounded-full cursor-pointer"
                style={{ width: "40px", height: "40px" }}
              >
                <div className="bg-black p-1 rounded-full">
                  <Share2 size={20} />
                </div>
              </button>
            </div>
          )}
          {chapter === 2 ? (
            <>
              {!loading && (
                <>
                  <div className="flex flex-col items-center mb-4">
                    <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
                    <h2 className="text-3xl font-bold p-2 tracking-wider">
                      <span className="text-white">Daily</span>
                      <span className="text-[#FF4F59]">Quote</span>
                    </h2>
                  </div>
                  <p className="text-xl font-semibold text-center mt-6 whitespace-pre-line">
                    안녕하세요!{"\n"}당신을 어떻게 불러드릴까요?
                  </p>
                  <input
                    type="text"
                    className="mt-4 p-2 border border-gray-500 rounded-lg text-white w-[263px]"
                    placeholder="이름 혹은 닉네임"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              )}
              {loading && (
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold text-center mb-3 whitespace-pre-line">
                    {name ? `${name}님의\n오늘의 명언 확인중..` : "오늘의 명언 확인중.."}
                  </p>
                  <div className="w-[197px] bg-[#697077] rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-[#FF4F59] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              <button
                className={`absolute bottom-6 bg-[#FF4F59] text-white text-lg font-medium py-2 rounded-lg w-[263px] transition ${
                  name && !loading ? "hover:opacity-80" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNext}
                disabled={!name || loading}
              >
                {loading ? "로딩 중..." : "다음"}
              </button>
            </>
          ) : (
            // 챕터 3 (이름을 반영하여 표시)
            <div className="relative flex flex-col items-center justify-start flex-grow w-full">
              <p className="text-xl font-semibold text-center mt-20 whitespace-pre-line">
                {name}님을 위한 오늘의 명언
              </p>
              <div className="flex flex-col items-center mb-14 justify-center flex-grow w-full">
                <h2 className="text-3xl font-bold text-center">
                  "성공은 작은 노력이 반복된 결과입니다."
                </h2>
                <p className="text-md text-center mt-2">- 헤르만 헤세</p>
              </div>
              {/* 하단에 고정된 요소 */}
              <div className="absolute bottom-6">
                <div className="w-[400px] h-[250px] bg-[#222222] rounded-[15px] flex flex-col items-center justify-center p-4">
                  <p className="text-white text-lg mb-4">헤르만 헤세가 쓴 책</p>
                    <div className="flex flex-row items-center space-x-4">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-28 bg-gray-700 rounded-r-md"></div>
                            <p className="text-white mt-2 text-sm">데미안</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-28 bg-gray-700 rounded-r-md"></div>
                            <p className="text-white mt-2 text-sm">데미안</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-28 bg-gray-700 rounded-r-md"></div>
                            <p className="text-white mt-2 text-sm">데미안</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}
          {/* Alert 컴포넌트: 화면 상단 중앙에 표시 */}
          {showAlert && (
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
              <Alert className="bg-green-200">
                <Copy className="h-4 w-4" />
                <AlertDescription className="text-green-600">
                  클립보드에 복사되었습니다!
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
