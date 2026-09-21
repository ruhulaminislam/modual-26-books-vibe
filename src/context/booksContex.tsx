"use client"
import { IBook } from '@/types/Books-types'
import React, { createContext, useState } from 'react'

interface IBooksContextType{

  readBooks: IBook[],
  setReadBooks:React.Dispatch<React.SetStateAction<IBook[]>>,
  wishList: IBook[],
  setWishList:React.Dispatch<React.SetStateAction<IBook[]>>
}

export const BooksContext = createContext<IBooksContextType >({readBooks:[], setReadBooks:()=>{}, wishList:[], setWishList:()=>{}})

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishList, setWishList] = useState<IBook[]>([])
    const shardData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }
   
  return (
     <BooksContext.Provider value={shardData}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider
