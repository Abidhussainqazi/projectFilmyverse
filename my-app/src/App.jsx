import { useState } from 'react'


import './App.css'
// import MovieCards from './Components/MovieCards'
import Header from './Components/Header'
import Cards from './Components/Cards'
import AddMovie from './Components/AddMovie'
import Detail from './Components/Detail'

import { Route, Routes } from 'react-router'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/addmovie' element={<AddMovie />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>


    </>
  )
}

export default App



