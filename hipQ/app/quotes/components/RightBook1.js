import React from 'react';

export default function RightBook1({ animate, confirmed }) {
  // 각 요소에 적용할 transform 값을 조건부로 설정
  const backTransform = animate ? "[transform:translateX(7rem)_rotateY(-20deg)_scale(1.1)]" : "";
  const page6Transform = animate ? "[transform:translateX(7rem)_rotateY(-50deg)_scale(1.1)]" : "";
  const page5Transform = animate ? "[transform:translateX(7rem)_rotateY(-130deg)_scale(1.1)]" : "";
  const page4Transform = animate ? "[transform:translateX(7rem)_rotateY(-40deg)_scale(1.1)]" : "";
  const page3Transform = animate ? "[transform:translateX(7rem)_rotateY(-140deg)_scale(1.1)]" : "";
  const page2Transform = animate ? "[transform:translateX(7rem)_rotateY(-30deg)_scale(1.1)]" : "";
  const page1Transform = animate ? "[transform:translateX(7rem)_rotateY(-150deg)_scale(1.1)]" : "";
  const frontTransform = animate ? "[transform:translateX(7rem)_rotateY(-160deg)_scale(1.1)]" : "";

  // 애니메이션 시 box-shadow 효과
  const boxShadow = animate ? "0 0.5em 1.5em 0 rgba(0,0,0,0.1)" : "none";

  return (
    <div
      className="relative w-[200px] h-[300px] mx-auto"
      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'visible' }}
    >
      {/* back */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em] ${backTransform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
      ></div>
      {/* page6 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#fdfdfd] rounded-r-[0.5em] ${page6Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* page5 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#fafafa] rounded-r-[0.5em] ${page5Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* page4 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#f5f5f5] rounded-r-[0.5em] ${page4Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* page3 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#f5f5f5] rounded-r-[0.5em] ${page3Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* page2 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#efefef] rounded-r-[0.5em] ${page2Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* page1 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#efefef] rounded-r-[0.5em] ${page1Transform}`}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
      ></div>
      {/* front */}
      {!confirmed ? (
        // float 애니메이션 적용, 제목과 서명이 보임
        <div className="absolute w-full h-full top-0 left-0 animate-float">
          <div
            className={`relative w-full h-full transition-transform transition-shadow duration-500 ease-in-out bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em] ${frontTransform}`}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
          >
            <h1 className="relative top-6 inset-0 flex items-center justify-center text-white text-xl font-bold">
              Daily Quote
            </h1>
            <small className="absolute bottom-1 right-1 text-white text-xs">
              hipster__egg
            </small>
          </div>
        </div>
      ) : (
        // confirmed 상태: float 애니메이션과 텍스트 숨김, transform 애니메이션만 실행
        <div className="absolute w-full h-full top-0 left-0">
          <div
            className={`relative w-full h-full transition-transform transition-shadow duration-500 ease-in-out bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em] ${frontTransform}`}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', boxShadow }}
          ></div>
        </div>
      )}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
