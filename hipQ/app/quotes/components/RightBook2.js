import React from 'react';

export default function RightBook2() {
  return (
    <div
      className="relative w-[200px] h-[300px] mx-auto animate-float"
      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'visible' }}
    >
      {/* back */}
      <div
        className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em]"
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
      ></div>
      {/* front */}
      <div className="absolute w-full h-full top-0 left-0">
        <div
          className="relative w-full h-full bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B] rounded-r-[0.5em]"
          style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
        >
          <h1 className="relative top-6 inset-0 flex items-center justify-center text-white text-xl font-bold">
            Daily Quote
          </h1>
          <small className="absolute bottom-1 right-1 text-white text-xs">
            hipster__egg
          </small>
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
  );
}
