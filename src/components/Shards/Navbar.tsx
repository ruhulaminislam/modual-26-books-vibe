import React from 'react'
import logo from "@/assets/book.ico"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  const datas=<>
    <Link href="/books"> <li><p>Books</p></li>  </Link> 
    <Link href="/listedbooks"> <li><p>Listed Books</p></li>  </Link>
    <Link href="/"> <li><p>home</p></li>  </Link>
    <Link href="/read-books"> <li><p>Read Books</p></li>  </Link>
  </>
  return (
   <nav className='bg-base-100 shadow-sm'>
     <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {datas}
      </ul>
    </div>
    <div className='flex justify-between items-center gap-2'>
       
         <Image src={logo} alt='logo'></Image>
         <h1 className="btn btn-ghost text-xl">Book Vibe</h1>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {datas}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <button className="btn btn-success">Button</button>
    <button className="btn  btn-warning">Button</button>
  </div>
</div>
   </nav>
  )
}

export default Navbar
