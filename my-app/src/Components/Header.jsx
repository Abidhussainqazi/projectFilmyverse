import React, { useContext } from 'react'
import '../Components/Header.css'
import { Link } from 'react-router-dom'
import { Appstate } from '../App'



function Header() {
  const useAppstate = useContext(Appstate);




  return (
    <>
      <nav className="navbar navbar-light bg-dark sticky-top justify-content-between">
        <Link to={'/'} style={{ paddingLeft: 0, textDecoration: 'none' }}>
          <a className="navbar-brand text-danger mx-4 heading text-decoration-none">Filmy <span className='verse'>Verse</span></a>
        </Link>

        { useAppstate.login ?


          <Link to={'/addmovie'}>
            <form className="form-inline">

              <button className="btn btn1 btn-outline-success my-2 my-sm-0" type="submit">+ ADD NEW</button>
            </form>

          </Link> :
          
          <Link to={'/login'}>
            <form className="form-inline">
            {/* btn1  btn-outline-success my-2 my-sm-0  */}
              <button className="btn btn-danger mx-4 " type="submit">Login</button>
            </form>

          </Link>

        }
      </nav>

    </>
  )
}

export default Header
