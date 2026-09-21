"use client"

import ListedBookCard from '@/components/Shards/ListedBookCard'
import { BooksContext } from '@/context/booksContex'
import { IBook } from '@/types/Books-types'

import React, { useContext } from 'react'

const Wishlist = () => {
  const { readBooks  ,wishList }=useContext(BooksContext)
  return (
    <div className="container mx-auto mt-[50px]">
       <div className="bg-[#F3F3F3] py-6" >

       <h1 className="text-2xl font-bold text-center">Books</h1>
       </div >
       {/* name of each tab group should be unique */}
        <div className="mt-[60px]">
          <div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
  { readBooks.length > 0 ? ( readBooks.map((book: IBook) => ( <ListedBookCard key={book.bookId} book={book} /> )) ) : ( <p>No books to display</p> ) }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    
    { wishList.length > 0 ? ( wishList.map((book: IBook) => ( <ListedBookCard key={book.bookId} book={book} /> )) ) : ( <p>No books to display</p> ) }
  </div>

 
</div>
        </div>
    </div>
  )
}

export default Wishlist
