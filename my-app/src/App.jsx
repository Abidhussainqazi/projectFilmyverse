import { useContext, useEffect, useState } from 'react'


import './App.css'
// import MovieCards from './Components/MovieCards'
import Header from './Components/Header'
import Cards from './Components/Cards'
import AddMovie from './Components/AddMovie'
import Detail from './Components/Detail'
import { Route, Routes } from 'react-router'
import { createContext} from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'

const Appstate = createContext();


function App() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

 
  return (
    <>
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>


      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/addmovie' element={<AddMovie />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>

      </Appstate.Provider>
    </>
  )
}

export default App;
export {Appstate}



