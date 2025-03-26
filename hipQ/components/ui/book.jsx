'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Book({
  title,
  author,
  coverImage,
  description,
  publishedDate,
  isbn,
}) {
  return (
    <motion.div
      className="relative w-64 h-96 perspective-1000 group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full transform-style-3d transition-transform duration-500 rotate-y-180 group-hover:rotate-y-0">
        {/* 책 앞면 */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-2xl p-4 backface-hidden">
          <div className="relative w-full h-48 mb-4 shadow-inner">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{author}</p>
          <p className="text-sm text-gray-500 mb-2">{publishedDate}</p>
        </div>

        {/* 책 뒷면 */}
        <div className="absolute w-full h-full bg-gray-100 rounded-lg p-4 backface-hidden rotate-y-180 shadow-2xl">
          <h3 className="text-xl font-bold mb-4">책 소개</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-sm text-gray-500">ISBN: {isbn}</p>
        </div>

        {/* 책 두께 효과 - 오른쪽 */}
        <div className="absolute w-8 h-full bg-gray-300 rounded-r-lg transform translate-x-full origin-left skew-y-12 -translate-y-1/2 top-1/2 left-0 shadow-lg" />

        {/* 책 두께 효과 - 아래쪽 (베이지색) */}
        <div className="absolute w-full h-8 bg-[#F5E6D3] rounded-b-lg transform translate-y-full origin-top skew-x-12 -translate-x-1/2 left-1/2 top-full shadow-lg" />

        {/* 책 두께 효과 - 왼쪽 (표지와 동일한 색상) */}
        <div className="absolute w-8 h-full bg-white rounded-l-lg transform -translate-x-full origin-right skew-y-12 -translate-y-1/2 top-1/2 right-0 shadow-lg" />

        {/* 책 페이지 효과 */}
        <div className="absolute right-0 top-0 w-4 h-full bg-white transform-style-3d">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full bg-gray-50 origin-left"
              style={{
                transform: `rotateY(${180 + (i * -5)}deg)`,
                transformOrigin: 'left center',
                boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.1)',
              }}
            />
          ))}
        </div>

        {/* 아래쪽 베이지 레이어 효과 */}
        <div className="absolute w-full h-2 bg-[#F5E6D3] rounded-b-lg transform translate-y-[calc(100%+2rem)] origin-top -translate-x-1/2 left-1/2 top-full shadow-md opacity-70" />
      </div>
    </motion.div>
  );
} 