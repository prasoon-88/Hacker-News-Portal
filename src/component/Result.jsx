import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { Mycontext } from '../App'
import ResultItem from './ResultItem'
import Loading from '../component/Loading'

const Result = () => {
    const { search , page} = useContext(Mycontext)
    const [loading,setLoading] = useState(false)
    const [result, setResult] = useState([]);

    const getResult = async() => {
        try {
            setLoading(true)
            let res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${search}&tags=story&page=${page}&hitsPerPage=10`)
            setResult(res?.data?.hits)
            setTimeout(()=>{
                setLoading(false)
            },1800)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getResult();
    }, [search,page]);

    if(loading){
        return <Loading/>
    }

    return (
        <div className='w-ful m-10 mx-24 p-16 bg-gray-100 shadow-md shadow-slate-400'>
            <div>
                <h4 className='text-green-900 text-xl font'>Results Here</h4>
                <ul className='px-28 py-5 list-disc gap-5 grid'>
                    {
                        result.map((item,index)=>(
                            <Link key={item.objectID+index} to={`/deatailPage/${item.objectID}`}>
                            <ResultItem item={item}/>
                            <hr />
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Result