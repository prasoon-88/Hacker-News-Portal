import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../App'

const Pagination = () => {

    const { page,setPage } = useContext(Mycontext)

    const left = '<';
    const right = '>';
  return (
    <div className='flex justify-center items-center pb-5'>
        <div className="flex text-3xl gap-5 items-center">
            <div className="cursor-pointer bg-green-200 px-3 "
            onClick={()=>{
                setPage(page == 1?page:page-1);
            }}><h2>{left}</h2></div>
            <div className="cursor-pointer">
                <h4>{page}</h4>
            </div>
            <div className="cursor-pointer bg-green-200 px-3 " onClick={()=>{
                setPage(page+1);
            }}><h2>{right}</h2></div>
        </div>
    </div>
  )
}

export default Pagination