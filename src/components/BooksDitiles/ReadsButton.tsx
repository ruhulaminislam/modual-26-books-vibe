
"use client"
import { BooksContext } from '@/context/booksContex'
import { IBook } from '@/types/Books-types'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'


const ReadsButton = ({ book }: { book:IBook }) => {
 const { readBooks, setReadBooks }=useContext(BooksContext)
    const handelClick = () => {
        const readBook=[...readBooks, book]
        setReadBooks(readBook)
   toast.success("wishlist added")
    }
  return (
   <button className="btn btn-primary w-full sm:w-auto" onClick={()=>handelClick()} >
          Read
        </button>
  )
}

export default ReadsButton
