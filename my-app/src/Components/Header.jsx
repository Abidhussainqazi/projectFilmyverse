import React from 'react'
import '../Components/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark sticky-top justify-content-between">
        <Link to={'/'} style={{paddingLeft: 0, textDecoration: 'none'}}>
          <a className="navbar-brand text-danger mx-4 heading text-decoration-none">Filmy <span className='verse'>Verse</span></a>
        </Link>

        <Link to={'/addmovie'}>
          <form className="form-inline">

            <button className="btn btn1 btn-outline-success my-2 my-sm-0" type="submit">+ ADD NEW</button>
          </form>

        </Link>
      </nav>

    </>
  )
}

export default Header
