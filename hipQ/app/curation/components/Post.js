"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// Component to render a single book card
export function BookCard({ book, toggleTag }) {
  return (
    <Card className="h-full overflow-hidden group relative">
      {/* Book Cover Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={book.image || "/placeholder.svg"}
          alt={book.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">{book.title}</h2>
            <p className="text-sm text-white/80">
              by {book.author} ({book.year})
            </p>
            <p className="text-white/90 mt-4">{book.content}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer text-white border-white/50"
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Always visible title at the bottom */}
      <div className="p-4 bg-background">
        <h3 className="font-medium">{book.title}</h3>
      </div>
    </Card>
  )
}

// Component to render the grid of book cards
export function BookGrid({ books, toggleTag }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} toggleTag={toggleTag} />
      ))}

      {books.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">해당하는 게시글이 없습니다 (┬┬﹏┬┬)</p>
        </div>
      )}
    </div>
  )
}
