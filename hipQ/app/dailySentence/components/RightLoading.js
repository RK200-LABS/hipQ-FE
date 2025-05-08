"use client";

import { useEffect, useState } from "react";
import RightBook3 from "./RightBook3";

export function RightLoading({ onComplete, name }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [animateBook, setAnimateBook] = useState(false);

  // Animation duration in milliseconds
  const duration = 5000;
  // Update interval in milliseconds
  const interval = 10;

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min(100, Math.floor((elapsedTime / duration) * 100));
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(timer);
        // 먼저 책 애니메이션 실행
        setAnimateBook(true);
        // RightBook3 애니메이션이 끝난 뒤 (500ms 후) fadeout 실행
        setTimeout(() => {
          setIsComplete(true);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // When fadeout is complete, wait additional 500ms then call onComplete
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);

  // SVG parameters
  const size = 350; // 👈 기존 400 → 350으로 줄임
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;


  return (
    <div className={`transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center justify-start">
        {/* ⬆ 위로 올림: 음수 마진 사용 */}
        <div className="relative mt-[-40px]">  
          <div className="mb-2 text-xl font-medium text-[#333333] text-center">
            {name}님을 위한 오늘의 글 찾는 중...
          </div>
  
          <svg width={size} height={size} className="transform -rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#e6e6e6"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#FF4F59"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 ease-linear"
            />
          </svg>
  
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="scale-90">
              <RightBook3 animate={animateBook} isComplete={isComplete} />
            </div>
          </div>
        </div>
  
        {/* TMI 텍스트는 아래에 여유 있게 유지 */}
        <div className="mt-4 text-center px-4">
          <p className="text-gray-500 text-sm leading-relaxed">
            {!isComplete && (
              <>
                알고 계셨나요?<br />
                레미제라블을 쓴 빅토르 위고는 집필할 당시 스스로를 감금한 상태로 글을 썼습니다.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
  
  
}

export default RightLoading;
