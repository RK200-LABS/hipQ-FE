'use client';

import React, { useState } from 'react';

const keywordData = {
  시간: ['고대', '중세', '근대', '현대', '미래'],
  장르: ['로맨스', '모험', '미스터리', '범죄', '성장', '재난', '추리', '판타지'],
  분위기: ['따뜻한', '유쾌한', '감동적인', '어두운'],
};

export default function TopKeyword() {
  const [selected, setSelected] = useState({});
  const [inputText, setInputText] = useState('');

  const handleClick = (category, keyword) => {
    setSelected((prev) => {
      const currentSet = new Set(prev[category] || []);
      if (currentSet.has(keyword)) {
        currentSet.delete(keyword);
      } else {
        currentSet.add(keyword);
      }
      return {
        ...prev,
        [category]: Array.from(currentSet),
      };
    });
  };

  const selectedKeywords = Object.values(selected).flat();
  const hasSelected = selectedKeywords.length > 0;

  return (
    <div className="flex flex-col items-center mt-5 gap-6">
      {/* Searchbar */}
      <div className="max-w-[896px] w-full px-4">
        <div className="relative flex w-full min-h-12 rounded-lg focus-within:shadow-lg bg-white overflow-x-auto border p-2 gap-2 flex-nowrap items-center">
          <div className="grid place-items-center h-10 w-10 text-gray-300 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 flex-nowrap overflow-x-auto">
            {selectedKeywords.map((keyword) => (
              <div
                key={keyword}
                className="flex items-center bg-[#F1F1F3] text-[#9BA3AA] px-3 rounded-[15px] h-[37px] text-sm whitespace-nowrap"
              >
                {keyword}
                <button
                  className="ml-2 text-gray-500 hover:text-red-500"
                  onClick={() => {
                    setSelected((prev) => {
                      const updated = { ...prev };
                      for (const category in updated) {
                        updated[category] = updated[category].filter((k) => k !== keyword);
                      }
                      return updated;
                    });
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            className="min-w-[150px] h-[37px] outline-none text-sm text-gray-700 items-center justify-center flex"
            type="text"
            id="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={hasSelected ? '선택된 키워드 :' : '키워드를 선택해주세요'}
          />
        </div>
      </div>

      {/* 키워드 선택 UI */}
      <div className="flex justify-center items-center">
        <div
          style={{
            width: '669px',
            height: '202px',
            border: '1px solid #ccc',
            padding: '16px',
            boxSizing: 'border-box',
          }}
          className="flex flex-col items-center"
        >
          <h1 className="font-extrabold text-lg mb-4">키워드</h1>
          <div className="flex flex-col gap-3 items-center">
            {Object.entries(keywordData).map(([category, keywords]) => (
              <div key={category} className="flex gap-[12px] flex-wrap justify-center">
                {keywords.map((keyword) => {
                  const isSelected = selected[category]?.includes(keyword);
                  return (
                    <button
                      key={keyword}
                      onClick={() => handleClick(category, keyword)}
                      style={{
                        height: '37px',
                        backgroundColor: isSelected ? '#FF313D' : '#F1F1F3',
                        color: isSelected ? '#FFFFFF' : '#000000',
                        padding: '0 12px',
                        borderRadius: '15px',
                        fontSize: '14px',
                      }}
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
