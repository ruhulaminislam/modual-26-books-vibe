import { IBook } from '@/types/Books-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListedBookCard = ({ book }: { book: IBook }) => {
  return (
<div key={book.bookId} className="group flex w-full items-center justify-between overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" >
 <div className="flex w-full flex-col items-center md:flex-row md:items-center"> {/* ================= IMAGE ================= */} <div className="relative h-80 w-full shrink-0 overflow-hidden bg-base-200 md:h-[430px] md:w-[300px]"> <Image src={book.image} alt={book.bookName} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover transition-transform duration-500 group-hover:scale-105" /> {/* Category */} <span className="absolute left-5 top-5 rounded-full bg-base-100/90 px-4 py-1.5 text-sm font-semibold shadow-lg backdrop-blur"> {book.category} </span> </div> {/* ================= CONTENT ================= */} <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10"> {/* Title + Rating */} <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"> <div> <p className="mb-2 text-sm font-medium text-primary"> BOOK #{book.bookId} </p> <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"> {book.bookName} </h2> <p className="mt-2 text-base text-base-content/60"> Written by{" "}
  <span className="font-semibold text-base-content"> {book.author} </span> </p>
   </div> {/* Rating */}
    <div className="flex w-fit items-center gap-2 rounded-full bg-base-200 px-4 py-2"> 
        <span>⭐</span> <span className="font-bold">{book.rating}</span>
         </div> 
         </div> 
         {/* Divider */}
          <div className="my-6 h-px bg-base-200" /> 
          {/* Review */} <div> 
            <h3 className="mb-2 text-lg font-semibold"> 
                About this book </h3> <p className="text-sm leading-7 text-base-content/70 sm:text-base">
                 {book.review} </p> </div> {/* Book Information */} 
                 <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                     <div className="rounded-xl bg-base-200 p-4"> 
                        <p className="text-xs text-base-content/50"> Pages </p> 
                        <p className="mt-1 font-bold"> {book.totalPages} </p> 
                        </div> <div className="rounded-xl bg-base-200 p-4"> 
                            <p className="text-xs text-base-content/50"> Published </p> 
                            <p className="mt-1 font-bold"> {book.yearOfPublishing} </p> 
                            </div> <div className="rounded-xl bg-base-200 p-4">
                                 <p className="text-xs text-base-content/50"> Publisher </p>
                                  <p className="mt-1 truncate font-bold"> {book.publisher} </p>
                                   </div> <div className="rounded-xl bg-base-200 p-4"> 
                                    <p className="text-xs text-base-content/50"> Category </p> 
                                    <p className="mt-1 truncate font-bold"> {book.category} </p> </div>
                                     </div> {/* Tags */}
                                      <div className="mt-6">
                                         <p className="mb-3 text-sm font-semibold"> 
                                            Tags </p> 
                                            <div className="flex flex-wrap gap-2">
                                                 {book.tags.map((tag) => ( 
                                                    <span key={tag} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary" >
                                                         #{tag}  </span> )
                                                       
                                                        )}
                                                          <Link href={`/books/${book.bookId}`} >
                                                            <button className="btn btn-sm btn-primary">View Details</button>
                                                          </Link>
                                                          </div> </div> </div> </div> </div>
  )
}

export default ListedBookCard
