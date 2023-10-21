import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import NewsDetailsPage from './pages/NewsDetailsPage'
import './index.css'
import { createContext, useState } from 'react'
import Contact from './pages/Contact'

export const Mycontext = createContext();


function App() {

  const [ search,setSearch ] = useState('');
  const [page,setPage] = useState(1);
  return (
    <Mycontext.Provider value={{setSearch,search,page,setPage}} >
    <div className='w-full'>
     <Router>
      <Navbar className='container'/>
        <Routes >
          <Route path='/'  element={<Home/>} />
          <Route path='/deatailPage/:id' element={<NewsDetailsPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
     </Router>
    </div>
    </Mycontext.Provider>
  )
}

export default App
