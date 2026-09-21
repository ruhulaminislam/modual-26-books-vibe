
import React from "react";


import { IBook } from "@/types/Books-types";
import BooksCard from "@/components/Shards/BooksCard";

const getBooks = async () => {
  const rec = await fetch("http://localhost:3000/booksData.json");

  return rec.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          📚 Our Collection
        </span>

        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Explore  all Books
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover amazing stories, timeless classics, and books worth
          adding to your collection.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book:IBook ) => {

         return (
         <BooksCard key={book.bookId} book={book}></BooksCard>)
        }
        )}
      </div>
    </section>
  );
};

export default Books;
