import React from 'react'
import { ImMenu } from "react-icons/im";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <nav className='bg-blue-900 flex justify-betweeen px-8 items-center py-6'>
<section>
<ImMenu className='text-3xl' />
<Link to={"www.google.com"} className='text-4xl font-mono'>
<img src="https://cdn.vectorstock.com/i/2000v/06/05/cat-logo-vector-26730605.avif"  alt="" />
</Link>
</section>
   </nav>
  )
}

export default Navbar
