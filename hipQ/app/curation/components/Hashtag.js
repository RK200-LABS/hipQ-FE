"use client";

import { Check } from "lucide-react";

// Tag Chip component
export function TagChip({ tag, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`
        relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
        flex items-center gap-2 shadow-sm hover:shadow
        ${
          isSelected
            ? "bg-[#FF4F5933] text-black border-2 border-[#FF4F59]"
            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
        }
      `}
      style={isSelected ? { boxShadow: "0 0 0 1px #FF4F59" } : {}}
    >
      {isSelected && (
        <span className="flex items-center justify-center bg-[#FF4F59] text-white rounded-full w-4 h-4">
          <Check className="w-3 h-3" />
        </span>
      )}
      #{tag}
    </button>
  );
}

// Component to render a category of tags
export function TagCategory({ tags, selectedTags, toggleTag }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
        {tags.map((tag) => (
          <TagChip key={tag} tag={tag} isSelected={selectedTags.includes(tag)} onClick={toggleTag} />
        ))}
      </div>
    </div>
  );
}

// Component to render all tag categories
export function HashtagSection({ timePeriods, genres, moods, selectedTags, toggleTag }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl mb-8 shadow-inner">
      <TagCategory tags={timePeriods} selectedTags={selectedTags} toggleTag={toggleTag} />
      <div className="border-t border-gray-200 w-1/2 mx-auto my-2"></div>
      <TagCategory tags={genres} selectedTags={selectedTags} toggleTag={toggleTag} />
      <div className="border-t border-gray-200 w-1/2 mx-auto my-2"></div>
      <TagCategory tags={moods} selectedTags={selectedTags} toggleTag={toggleTag} />
    </div>
  );
}
