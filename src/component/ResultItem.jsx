import React from 'react'


const ResultItem = ({item}) => {
  
    return (
        <li>
            <div className='grid gap-1 items-center overflow-hidden'>
                <h1 className='text-xl w-full'>{item.title}</h1>
                <p className=' text-sm font-lighter text-slate-500'>{`(${item.url})`}</p>
                
            </div>
            <div className='flex gap-2 items-center font-serif text-slate-400'>
                <p>{`${item.points} points`}</p>|
                <p>{`${item.author}`}</p>|
                <p>{`${item.num_comments} comments`}</p>
            </div>
        </li>
    )
}

export default ResultItem