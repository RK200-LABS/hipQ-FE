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
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          
        <div className="mt-6 mb-2 text-xl font-medium text-[#333333] text-center">
          {name}님을 위한 오늘의 글 찾는 중...
        </div>


          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#e6e6e6"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
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

          {/* Book in the middle instead of percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="scale-90">
              <RightBook3 animate={animateBook} isComplete={isComplete} />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-gray-500">
                {isComplete ? "" : (
                <>
                    알고 계셨나요?<br />
                    레미제라블을 쓴 빅토르 위고는 집필할 당시 스스로를 감금한 상태로 글을 썼습니다.       {/* tmi(필요에 따라 그냥 없이 가도 됨) */}
                </>
                )}
            </p>
        </div>
        <button disabled type="button" className="absolute bottom-8 w-[300px] h-[52px] text-white bg-[#FF4F59] hover:bg-[#FF4F59] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-[#FF4F59] dark:hover:bg-[#FF4F59] dark:focus:ring-red-800 inline-flex items-center justify-center cursor-not-allowed">
            <svg aria-hidden="true" role="status" className="w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
              
        </button>


      </div>
    </div>
  );
}

export default RightLoading;
