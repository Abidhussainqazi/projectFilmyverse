import { useState } from 'react'


import './App.css'
// import MovieCards from './Components/MovieCards'
import Header from './Components/Header'
import Cards from './Components/Cards'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Cards/>
{/* <MovieCards/> */}
  
    </>
  )
}

export default App

 

