
import React from "react";
import banner from "@/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-8 py-10 shadow-sm md:px-12 lg:py-14">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        
        {/* Content */}
        <div className="max-w-xl text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            📚 Discover Your Next Favorite Book
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Books to
            <span className="text-emerald-600"> freshen up </span>
            your bookshelf
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Explore amazing books, discover new stories, and build a
            collection that makes your bookshelf special.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start">
            <button className="btn btn-success rounded-full px-7 text-white shadow-lg shadow-emerald-200 transition hover:scale-105">
              View The List →
            </button>

            <button className="btn btn-outline rounded-full px-7">
              Explore Books
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-4 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:scale-[1.02]">
            <Image
              src={banner}
              alt="Books collection"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

