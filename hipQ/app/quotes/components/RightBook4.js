import React from 'react';

export default function RightBook4() {
  // 최종 상태의 transform 값들을 정의 (애니메이션 효과가 적용된 모양)
  const backTransform = "translateX(7rem) rotateY(-20deg) scale(1.1)";
  const page6Transform = "translateX(7rem) rotateY(-50deg) scale(1.1)";
  const page5Transform = "translateX(7rem) rotateY(-130deg) scale(1.1)";
  const page4Transform = "translateX(7rem) rotateY(-40deg) scale(1.1)";
  const page3Transform = "translateX(7rem) rotateY(-140deg) scale(1.1)";
  const page2Transform = "translateX(7rem) rotateY(-30deg) scale(1.1)";
  const page1Transform = "translateX(7rem) rotateY(-150deg) scale(1.1)";
  const frontTransform = "translateX(7rem) rotateY(-160deg) scale(1.1)";

  // box-shadow 효과
  const boxShadow = "0 0.5em 1.5em 0 rgba(0,0,0,0.1)";

  return (
    <div
      className="relative w-[200px] h-[300px] mx-auto"
      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'visible' }}
    >
      {/* back */}
      <div
        className="absolute w-full h-full top-0 left-0 rounded-r-[0.5em] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B]"
        style={{ transform: backTransform, transformOrigin: 'left center' }}
      ></div>

      {/* page2 */}
      <div
        className="absolute w-full h-full top-0 left-0 rounded-r-[0.5em] bg-white"
        style={{ transform: page2Transform, transformOrigin: 'left center', boxShadow }}
      >
        {/* 내부 텍스트를 counter transform으로 부모의 회전을 상쇄하고 flex centering */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateY(30deg)' }}>
          <p className="text-lg text-center text-black p-2">- 헤르만 헤세</p>
        </div>
      </div>

      {/* page1 */}
      <div
        className="absolute w-full h-full top-0 left-0 rounded-r-[0.5em] bg-white"
        style={{ transform: page1Transform, transformOrigin: 'left center', boxShadow }}
      >
        {/* 부모의 회전 효과(-150deg)를 상쇄하기 위해 rotateY(150deg)를 적용 */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateY(150deg)' }}>
          <p className="text-lg text-center text-black p-2">
            성공은 작은 노력이 반복된 결과입니다.
          </p>
        </div>
      </div>

      {/* front */}
      <div
        className="absolute w-full h-full top-0 left-0 rounded-r-[0.5em] bg-gradient-to-r from-[#FF4F59] to-[#FF6B6B]"
        style={{ transform: frontTransform, transformOrigin: 'left center', boxShadow }}
      >
      </div>
    </div>
  );
}
