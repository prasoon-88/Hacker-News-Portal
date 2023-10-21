import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../component/Loading';

const NewsDetailsPage = () => {
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  const [result, setResult] = useState({})

  useEffect(() => {
    getProductDetails();
  }, [id])

  const getProductDetails = async()=>{
    try {
      setLoading(true);
      let res = await axios.get(`https://hn.algolia.com/api/v1/items/${id}`)
      setResult(res.data)
      console.log(res.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='pt-5 px-28 w-full'>
      <div className=' bg-emerald-100 px-10 py-12 grid gap-8 relative'>
        
        <img src="https://pngimg.com/d/hacker_PNG33.png" alt="" className='absolute opacity-10 h-96 right-10 top-20' />
        <h1 className=' font-medium text-4xl text-slate-700'>{result.title}</h1>
        <h3>Author - ' {result.author?.toUpperCase()} '</h3>
        <h3>Content Id - {result.id}</h3>
        <h2 className=' text-blue-500 text-lg'>Content Type - <span className='text-blue-800'>{result?.type?.toUpperCase()}</span></h2>
        <h2>Created At - <span className=' text-rose-900'>{Date(result.created_at)}</span></h2>
        <h3 className=' font-mono text-lg font-semibold text-slate-600'>
          Direact Read - <a href={result.url} target='_blank'>{result.url}</a></h3>
        <a href={result.url} target='_blank' className=' text-green-800 mt-8 w-40'>
          <button className=' px-5 py-2 bg-green-600 text-white'>Read More...</button>
        </a>
        
      </div>
    </div>
  )
}

export default NewsDetailsPage