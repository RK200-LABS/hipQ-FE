"use client ";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import LeftDescribe from "./LeftDescribe";
import LeftCard from "./LeftCard";

export default function InfoModal({ isOpen, onClose }) {
  const [page, setPage] = useState(1);

  // 모달이 열릴 때 항상 1페이지로 초기화
  useEffect(() => {
    if (isOpen) setPage(1);
  }, [isOpen]); // 현재 페이지 상태

  const nextPage = () => {
    if (page < 2) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  if (!isOpen) return null; // 모달이 열려있지 않으면 렌더링하지 않음

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"> {/* max-w-md로 변경하여 더 넓은 공간 확보 */}
        {/* 닫기 버튼 */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* 페이지 내용 */}
        <div className="text-center">
          {page === 1 && (
            <>
              <div className="w-full text-left mb-6">
                <h2 className="text-[20px] sm:text-[25px] font-semibold text-[#FF313D] whitespace-nowrap">
                  오늘의 명언
                </h2>
                <p className="text-[24px] sm:text-[28px] lg:text-[33px] font-black text-black mt-[10px] whitespace-nowrap">
                  NFC를 태그하여 <br/>오늘의 명언을 확인하세요
                </p>
              </div>
              <Image 
                src="/assets/quotemaker.gif" 
                alt="오늘의 명언" 
                width={300} 
                height={300} 
                className="mx-auto"
              />
            </>
          )}
          {page === 2 && (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-left mb-6">
                <h3 className="text-[20px] sm:text-[25px] font-bold text-[#FF313D] mb-5">설명</h3>
                <p className="text-lg mb-6">
                  1. NFC를 휴대폰에 태그한다. <br /> <br />
                  2. 이름이나 닉네임을 입력 후 오늘의 명언을 확인한다. <br /> <br />
                  3. 좋은 말을 친구들과 공유한다.
                </p>
              </div>
              <LeftCard />
            </div>
          )}

        </div>

        {/* 페이지 네비게이션 버튼 */}
        <div className="flex justify-between items-center mt-6">
          <button
            className={`p-2 rounded-full ${
              page === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={prevPage}
            disabled={page === 1}
          >
            <ChevronLeft size={24} />
          </button>

          <p className="text-gray-500 whitespace-nowrap">{page} / 2</p>

          <button
            className={`p-2 rounded-full ${
              page === 2 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={nextPage}
            disabled={page === 2}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
