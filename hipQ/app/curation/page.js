"use client"

import { useState } from "react"
import { Input } from  "@/components/ui/input"
import { Search } from "lucide-react"
import SubHeader from "./components/SubHeader";
import { HashtagSection } from "./components/Hashtag"
import { BookGrid } from "./components/Post"

// 카테고리
const timePeriods = ["고대", "과거", "현대", "미래"]
const genres = ["범죄", "미스테리", "모험", "판타지", "로맨스", "성장", "스릴러", "역사", "종교"]
const moods = ["따뜻한", "어두운", "감동적인", "유머러스한", "교훈적인"]

// 더미 데이터
const books = [
  {
    id: 1,
    title: "침묵의 메아리",
    content: "빅토리아 시대 런던, 형사가 연쇄살인범을 쫓으며 어두운 비밀을 밝혀낸다.",
    tags: ["과거", "범죄", "어두운", "미스테리"],
    author: "엘리노어 라이트",
    year: "2023",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "별 너머",
    content: "먼 행성에 정착한 식민자들이 그들의 존재를 위협하는 미지의 위험에 맞선다.",
    tags: ["미래", "모험", "스릴러"],
    author: "마커스 첸",
    year: "2024",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "정원의 속삭임",
    content: "가족 모임을 통해 오랫동안 묻혀 있던 비밀이 밝혀지는 현대 드라마.",
    tags: ["현대", "성장", "감동적인"],
    author: "소피아 존슨",
    year: "2022",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "잊혀진 왕국",
    content: "고아 소녀가 자신의 마법적 혈통을 발견하고 조상의 왕좌를 되찾기 위해 싸운다.",
    tags: ["과거", "판타지", "모험"],
    author: "제임스 블랙우드",
    year: "2023",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "그림자의 도시",
    content: "기자가 도시의 부패를 파헤치다 강력한 적들의 표적이 된다.",
    tags: ["현대", "스릴러", "어두운", "미스테리"],
    author: "올리비아 마르티네즈",
    year: "2024",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "꽃피는 사랑",
    content: "적대하는 두 가문 출신 정원사들이 꽃 경연 대회에서 예상치 못한 사랑을 싹틔운다.",
    tags: ["현대", "로맨스", "따뜻한", "유머러스한"],
    author: "토마스 리",
    year: "2022",
    image: "/placeholder.svg?height=400&width=300",
  },
];


export default function BookCuratingSite() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState([])


  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => book.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  return (
    <div className="container mx-auto px-4 py-8">
      
      <SubHeader/>
      <div className="relative mb-12">
        
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Curation 검색 또는 키워드 선택"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">키워드</h1>

      <HashtagSection
        timePeriods={timePeriods}
        genres={genres}
        moods={moods}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />
      <BookGrid books={filteredBooks} toggleTag={toggleTag} />
    </div>
  )
}
