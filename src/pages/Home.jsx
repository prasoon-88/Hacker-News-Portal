import React from 'react'
import Searchbar from '../component/Searchbar'
import Result from '../component/Result'
import Pagination from '../component/Pagination'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className=' bg-neutral-50'>
      <Searchbar/>
      <Result/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Home