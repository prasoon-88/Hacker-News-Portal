import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Mycontext } from '../App'


const Searchbar = () => {
  const { setSearch } = useContext(Mycontext)
  const [searchContent,setSearchContent] = useState('')
  const [changeText, setChangeText] = useState([`Hacker's Quest`, 'Uncover the Secrets', 'Dig Deeper', 'Unlock the Vault', `Hacker's Haven`, 'Hunt for Bytes']);
  const [index, setIndex] = useState(0);
  setInterval(() => {
    setIndex((index + 1) % changeText.length)
  }, 2000)


  return (
    <div className='  w-ful p-10 px-24 pb-20 bg-emerald-900 text-center bg-[url(https://png.pngtree.com/thumb_back/fw800/background/20200605/pngtree-abstract-hacker-background-with-digital-number-image_338330.jpg)] bg-center bg-opacity-95'>
      <div className=' p-12'>
        <h1 className=' font-extrabold text-6xl my-10 text-lime-50'>Search the <span className='text-lime-200 transition-all ease-in duration-300'>{
          changeText[index]
        }</span> </h1>
        <div className='flex justify-center items-center overflow-hidden '>
          <input type="text" placeholder='Amateurs hack systems, professionals hack people.' className=' w-3/6 text-xl border-none outline-none px-5 py-2 bg-lime-50' onInput={(e) => {
            setSearchContent(e.target.value)
          }} />
          <button className='text-3xl  px-2 py-1 bg-lime-50'
            onClick={()=>{
              if(searchContent!=''){
                setSearch(searchContent);
              }
              else{
                alert("You are not a Hacker ! \nSearch Somthing")
              }
            }}
          ><i className="ri-search-2-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar