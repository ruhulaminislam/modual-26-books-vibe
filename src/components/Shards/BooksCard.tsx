import { IBook } from '@/types/Books-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 interface IbooksProps{
  book:IBook
 }

const BooksCard = ({book}:IbooksProps) => {
  return (
   <div
            
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
              <Image
                src={book.image}
                alt={book.bookName}
             
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-700 shadow">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                  ⭐ {book.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
                {book.bookName}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                by <span className="font-medium text-gray-700">{book.author}</span>
              </p>

              {/* Description */}
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
                {book.review}
              </p>

              {/* Book Info */}
              <div className="mt-5 flex items-center justify-between border-y border-gray-100 py-3 text-sm text-gray-500">
                <span>📖 {book.totalPages} Pages</span>
                <span>📅 {book.yearOfPublishing}</span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link href={`/books/${book.bookId}`}> <button className="btn btn-success mt-5 w-full rounded-xl text-white transition hover:scale-[1.02]">
                View Details →
              </button></Link>
            </div>
          </div>
  )
}

export default BooksCard
