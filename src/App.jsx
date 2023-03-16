import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Navbar from './Components/Navbar'

import Meal from './Components/Meal'
import { Routes,Route } from 'react-router-dom'
import Detail from './Components/Detail'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' container mx-auto flex flex-col grow bg-slate-200 h-full '>
      <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/meal' element={<Meal/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/search/:name' element={<Search/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
