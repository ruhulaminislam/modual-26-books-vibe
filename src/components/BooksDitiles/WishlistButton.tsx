
"use client"
import { BooksContext } from '@/context/booksContex'
import { IBook } from '@/types/Books-types'
import React, { useContext } from 'react'
import {  toast } from 'react-toastify'


const  WishlistButton = ({ book }: { book:IBook }) => {
 const { wishList, setWishList }=useContext(BooksContext)
    const handelClick = () => {
        const wishBook=[...wishList, book]
        setWishList(wishBook)
         toast.success("wishlist added")
    }
  return (
   <button className="btn btn-primary w-full sm:w-auto" onClick={()=>handelClick()} >
          Wishlist
        </button>
  )
}

export default WishlistButton
