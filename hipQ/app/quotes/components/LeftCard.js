"use client";
import Image from "next/image"; // ✅ Next.js 이미지 최적화
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LeftCard() {
    const handleCardClick = () => {
        window.location.href = "https://marpple.shop/kr/hipster__egg";
    };

    return (
        <div className="relative w-full max-w-[250px] flex flex-col items-center justify-center md:max-w-none"> {/* ✅ 크기 변경 없음 */}
            
            {/* "키링 둘러보기" 문구를 중앙 상단에 배치 */}
            <p className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl font-semibold mb-4">
                NFC 키링 둘러보기
            </p>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full relative mt-10"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card 
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    onClick={handleCardClick}
                                >
                                    <CardContent className="flex items-center justify-center p-6">
                                        <Image
                                            src={`/assets/${index + 1}.png`} // ✅ 이미지 동적 변경
                                            alt={`Image ${index + 1}`}
                                            width={100} // ✅ 이미지 크기 조정
                                            height={100}
                                            className="object-contain"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* 좌우 버튼을 Carousel의 하단 중앙에 배치 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
}
