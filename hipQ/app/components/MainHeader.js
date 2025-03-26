"use client"; // Next.js 클라이언트 컴포넌트 선언

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // 아이콘 사용 (lucide-react 설치 필요)
import Link from "next/link"; // Next.js 라우팅을 위한 Link 사용
import { useRouter } from "next/navigation"; // Next.js 라우터 사용
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태 감지
  const router = useRouter(); // 라우팅을 위한 useRouter 사용

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false); // 모바일 메뉴 상태

  return (
    <header
      className={`w-full h-[90px] fixed top-0 left-0 px-6 shadow-md flex items-center justify-between ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-black"
      }`}
    >
      {/* 로고 + 추가 텍스트 (왼쪽 정렬) */}
      
      <div className="flex flex-col items-start leading-tight">
        
        <div className="text-xl font-bold">hipQ</div>
        <div className="text-xs font-regular text-[#697077]">@hipster__egg</div>
      </div>

      {/* 데스크톱 메뉴 (가운데 정렬) */}
      <nav className="hidden md:flex space-x-12 text-xl font-extrabold absolute left-1/2 -translate-x-1/2">
        <a href="#" className="hover:text-[#FF4F59] transition-all duration-300 ease-in-out">
          큐레이션
        </a>
        <Link href="/quotes" className="hover:text-[#FF4F59] transition-all duration-300 ease-in-out">
          하루, 한 글
        </Link>
      </nav>

      {/* 시작하기 버튼 */}
      <Link
        href="/start"
        className={`hidden md:block text-xl font-extrabold ${
          isScrolled ? "text-white" : "text-black"
        } hover:text-[#FF4F59] transition-all duration-300 ease-in-out`}
      >
        시작하기
      </Link>

      {/* 모바일 메뉴 버튼 */}
      <button
        className="md:hidden block ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* 모바일 메뉴 (가운데 정렬) */}
      {isOpen && (
        <nav
          className={`absolute top-[90px] left-0 w-full p-6 flex flex-col items-center space-y-2 md:hidden text-xl font-extrabold ${
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div
            className="w-full flex justify-center items-center py-3 cursor-pointer hover:text-[#FF4F59] transition-all duration-300 ease-in-out"
            onClick={() => router.push("/curation")}
          >
            <a className="pointer-events-none">큐레이션</a>
          </div>
          <div
            className="w-full flex justify-center items-center py-3 cursor-pointer hover:text-[#FF4F59] transition-all duration-300 ease-in-out"
            onClick={() => router.push("/quotes")}
          >
            <a className="pointer-events-none">하루, 한 글</a>
          </div>
          <div
            className="w-full flex justify-center items-center py-3 cursor-pointer hover:text-[#FF4F59] transition-all duration-300 ease-in-out"
            onClick={() => router.push("/start")}
          >
            <a className="pointer-events-none">시작하기</a>
          </div>
        </nav>
      )}
    </header>
  );
}
