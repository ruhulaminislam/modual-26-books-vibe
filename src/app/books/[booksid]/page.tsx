import ReadsButton from '@/components/BooksDitiles/ReadsButton'
import WishlistButton from '@/components/BooksDitiles/WishlistButton'
import { IBook } from '@/types/Books-types'
import Image from 'next/image'
import React from 'react'
interface Bookdataprops{
    params:Promise<{
        booksid:string
    }>
}
const page = async ({params}:Bookdataprops) => {
    const {booksid}= await params
    const response= await fetch(`${process.env.NEXT_PUBLIC_server_url}/booksData.json`)
    const data=await response.json()
    const book=data.find((book:IBook)=>book.bookId=== parseInt(booksid))as IBook

  return (
  <section className="container mx-auto mt-[70px] px-4 pb-10">
  <div className="card lg:card-side overflow-hidden border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl">
    
    {/* Book Image */}
    <figure className="bg-base-200 p-6 sm:p-8 lg:w-[400px] lg:shrink-0">
      <Image
        src={book.image}
        alt={book.bookName}
        width={400}
        height={400}
        className="h-auto max-h-[420px] w-full object-contain transition-transform duration-300 hover:scale-105"
      />
    </figure>

    {/* Book Details */}
    <div className="card-body p-6 sm:p-8 lg:p-10">
      
      {/* Category */}
      <div className="mb-2">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="card-title text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-base text-base-content/70">
        by <span className="font-semibold text-base-content">{book.author}</span>
      </p>

      {/* Review */}
      <p className="mt-3 text-sm leading-7 text-base-content/70 sm:text-base">
        {book.review}
      </p>

      {/* Book Information */}
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-base-200 p-4 sm:grid-cols-3">
        
        <div>
          <p className="text-xs text-base-content/60">Pages</p>
          <p className="font-semibold">{book.totalPages}</p>
        </div>

        <div>
          <p className="text-xs text-base-content/60">Rating</p>
          <p className="font-semibold">⭐ {book.rating}</p>
        </div>

        <div>
          <p className="text-xs text-base-content/60">Published</p>
          <p className="font-semibold">{book.yearOfPublishing}</p>
        </div>

        <div>
          <p className="text-xs text-base-content/60">Publisher</p>
          <p className="font-semibold">{book.publisher}</p>
        </div>

      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-ghost px-3 py-3"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="card-actions mt-6 flex-col gap-3 sm:flex-row sm:justify-end">
        <ReadsButton book={book} ></ReadsButton>

       <WishlistButton book={book}></WishlistButton>
      </div>

    </div>
  </div>
</section>
  )
}

export default page
