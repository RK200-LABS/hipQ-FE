"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function RightBookShelf() {
  // Four books - first 3 straight, last one leaning
  const [books] = useState([
    {
      id: 1,
      title: "위대한 개츠비",
      author: "프랜시스 스콧 피츠제럴드",
      color: "bg-blue-500",
      width: 45,
      height: 180,
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      zIndex: 1,
      position: 0,
    },
    {
      id: 2,
      title: "앵무새 죽이기",
      author: "하퍼 리",
      color: "bg-green-500",
      width: 38,
      height: 165,
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      zIndex: 2,
      position: 55,
    },
    {
      id: 3,
      title: "데미안",
      author: "헤르만 헤세",
      color: "bg-[#FF4F59]",
      width: 42,
      height: 173,
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      zIndex: 3,
      position: 105,
    },
    {
      id: 4,
      title: "호빗",
      author: "J.R.R. 톨킨",
      color: "bg-yellow-500",
      width: 53,  
      height: 175,
      rotation: -12,
      offsetX: 0,
      offsetY: 0,
      zIndex: 4,
      position: 182,
    },
  ])

  return (
    <TooltipProvider>
      <div className="relative w-[300px] h-[160px]">
        {/* Desk shelf with shadow to give 3D effect */}
        <div className="absolute w-full h-[30px] bottom-0 bg-[#e0d2c0] rounded-md shadow-lg">
          <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#d0c2b0] rounded-b-md"></div>
        </div>

        {/* Left bookend */}
        <div className="absolute bottom-[30px] left-[10px] w-[15px] h-[130px] bg-[#9c9c9c] rounded-t-sm z-10">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#8a8a8a]"></div>
        </div>

        {/* Right bookend */}
        <div className="absolute bottom-[30px] right-[10px] w-[15px] h-[130px] bg-[#9c9c9c] rounded-t-sm z-10">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8a8a8a]"></div>
        </div>

        {/* Books container */}
        <div className="absolute bottom-[30px] left-[35px] h-[130px] w-[230px]">
          {/* First 3 books */}
          {books.slice(0, 3).map((book) => (
            <Tooltip key={book.id}>
              <TooltipTrigger asChild>
                <div
                  className={`${book.color} rounded-t-sm shadow-md cursor-pointer transition-all hover:-translate-y-2 absolute bottom-0`}
                  style={{
                    width: `${book.width}px`,
                    height: `${book.height}px`,
                    transform: `rotate(${book.rotation}deg)`,
                    zIndex: book.zIndex,
                    left: `${book.position}px`,
                  }}
                >
                  {/* Book title positioned properly in center */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div
                      className="text-white text-sm text-center"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                        textShadow: "0px 0px 2px rgba(0,0,0,0.5)",
                        transform: "translate(0, 0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {book.title}
                    </div>
                  </div>



                  <div className="h-full flex flex-col justify-between p-1 pointer-events-none">
                    <div className="w-full h-[1px] bg-white/20"></div>
                    <div className="w-full h-[1px] bg-white/20"></div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="border"
                style={{
                  backgroundColor: "white",
                  borderColor: "#697077",
                }}
              >
                <p className="font-medium text-black">{book.title}</p>
                <p className="text-xs" style={{ color: "#697077" }}>{book.author}</p>
              </TooltipContent>

            </Tooltip>
          ))}

          {/* Leaning book */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`${books[3].color} rounded-t-sm shadow-md cursor-pointer transition-all hover:-translate-y-2 absolute bottom-2.5`}
                style={{
                  width: `${books[3].width}px`,
                  height: `${books[3].height}px`,
                  transform: `rotate(${books[3].rotation}deg)`,
                  transformOrigin: "bottom right",
                  zIndex: books[3].zIndex,
                  left: `${books[3].position}px`,
                }}
              >
                {/* Book title positioned slightly higher and to the right */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div
                    className="text-white text-sm text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      textShadow: "0px 0px 2px rgba(0,0,0,0.5)",
                      transform: "rotate(-6deg)", // 반시계 방향으로 약간 틀기
                      transformOrigin: "center",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {books[3].title}
                  </div>
                </div>



                <div className="h-full flex flex-col justify-between p-1 pointer-events-none">
                  <div className="w-full h-[1px] bg-white/20"></div>
                  <div className="w-full h-[1px] bg-white/20"></div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="border"
              style={{
                backgroundColor: "white",
                borderColor: "#697077",
              }}
            >
              <p className="font-medium text-black">{books[3].title}</p>
              <p className="text-xs" style={{ color: "#697077" }}>{books[3].author}</p>
            </TooltipContent>

          </Tooltip>
        </div>

        {/* Desk surface hint */}
        <div className="absolute w-full h-[30px] bottom-0 bg-[#e0d2c0] rounded-md shadow-lg flex items-center justify-center">
          <span className="text-sm font-semibold" style={{ color: "#652A0E" }}>
            이달의 추천 책
          </span>
        </div>

      </div>
    </TooltipProvider>
  )
}
