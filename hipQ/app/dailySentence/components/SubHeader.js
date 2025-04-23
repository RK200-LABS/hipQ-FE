"use client";

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/sheet"; // shadcn sheet
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full h-[80px] fixed top-0 left-0 right-0 z-50 px-6 flex items-center justify-between 
                  bg-transparent text-black md:bg-black md:text-white">
      {/* 로고 */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/assets/logo.png" alt="hipQ 로고" width={44} height={44} />
        <div className="flex flex-col items-start leading-tight ml-3">
          <div className="text-xl font-bold">hipQ</div>
          <div className="text-xs font-regular text-[#697077]">@hipster__egg</div>
        </div>
      </div>

      {/* 데스크톱 메뉴 */}
      <nav className="hidden md:flex space-x-12 text-xl font-extrabold absolute left-1/2 -translate-x-1/2">
        <Link href="/curation" className="hover:text-[#FF4F59] transition-all duration-300 ease-in-out">
          큐레이션
        </Link>
        <Link href="/quotes" className="hover:text-[#FF4F59] transition-all duration-300 ease-in-out">
          하루, 한 글
        </Link>
      </nav>

      {/* 시작하기 버튼 */}
      <Link
        href="/start"
        className="hidden md:block text-xl font-extrabold hover:text-[#FF4F59] transition-all duration-300 ease-in-out"
      >
        시작하기
      </Link>

      {/* 모바일 메뉴 버튼 + Sheet */}
      <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent side="right" className="bg-white text-black w-[80%] max-w-sm">
          <SheetHeader>
            <h2 className="text-xl font-bold">제목</h2>
          </SheetHeader>
          <div className="mt-6 space-y-6 text-xl font-bold text-center">
            <div
              className="cursor-pointer hover:text-[#FF4F59]"
              onClick={() => router.push("/curation")}
            >
              큐레이션
            </div>
            <div
              className="cursor-pointer hover:text-[#FF4F59]"
              onClick={() => router.push("/quotes")}
            >
              하루, 한 글
            </div>
            <div
              className="cursor-pointer hover:text-[#FF4F59]"
              onClick={() => router.push("/start")}
            >
              시작하기
            </div>
          </div>
        </SheetContent>
      </Sheet>

      </div>
    </header>
  );
}
