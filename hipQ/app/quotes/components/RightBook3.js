"use client"

export default function RightBook3({ animate, isComplete }) {
  // box-shadow 효과는 animate 여부에 따라 인라인으로 적용합니다.
  const boxShadow = animate ? "0 0.5em 1.5em 0 rgba(0,0,0,0.1)" : "none"

  return (
    <div
      className="relative w-[150px] h-[225px] mx-auto"
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
    >
      {/* back */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-20deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
      ></div>
      {/* page6 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#fdfdfd] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-50deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* page5 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#fafafa] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-130deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* page4 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#f5f5f5] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-40deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* page3 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#f5f5f5] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-140deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* page2 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#efefef] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-30deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* page1 */}
      <div
        className={`absolute w-full h-full top-0 left-0 transition-transform transition-shadow duration-500 ease-in-out bg-[#efefef] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-150deg)_scale(1.1)]" : ""}`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
      ></div>
      {/* front */} 
      <div className={`absolute w-full h-full top-0 left-0 ${!isComplete ? "animate-float" : ""}`}>
        <div
          className={`relative w-full h-full transition-transform transition-shadow duration-500 ease-in-out bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em] ${animate ? "[transform:translateX(5rem)_rotateY(-160deg)_scale(1.1)]" : ""}`}
          style={{ transformStyle: "preserve-3d", transformOrigin: "left center", boxShadow }}
        >
          {/* animate가 false이고, isComplete도 false일 때만 텍스트 표시 */}
          {!animate && !isComplete && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-xl font-bold">Daily Sentence</h1>
              <small className="text-white text-xs">hipster__egg</small>
            </div>
          )}
        </div>
      </div>

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
  )
}
