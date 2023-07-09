import { useState } from 'react'


import './App.css'
import MovieCards from './Components/MovieCards'
import Header from './Components/Header'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<MovieCards/>
  
    </>
  )
}

export default App

 

