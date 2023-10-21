import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between p-7 px-24 items-center drop-shadow-sm'>
      <Link to={'/'}><h2 className=' text-3xl font-semibold text-blue-900'>HackerNews.io</h2></Link>
      <ul className=' flex gap-16 text-lg items-center'>
        <li className=' text-red-950 hover:text-blue-700 cursor-pointer transition-all ease duration-200 '><Link to={'/'}>Home</Link></li>
        <li className=' text-red-950 hover:text-blue-700 cursor-pointer transition-all ease duration-200 '><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link><button className=' bg-green-300 px-6 py-2 rounded-md hover:bg-green-400 transition-all ease duration-300'>Login</button></Link></li>  
        <li><Link><button className=' bg-green-300 px-6 py-2 rounded-md hover:bg-green-400 transition-all ease duration-300'>SignUp</button></Link></li>  
      </ul>
    </div>
  )
}

export default Navbar