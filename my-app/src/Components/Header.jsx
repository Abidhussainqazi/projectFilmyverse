import React from 'react'
import'../Components/Header.css'

function Header() {
  return (
    <>
    <nav className="navbar navbar-light bg-dark justify-content-between">
  <a className="navbar-brand text-danger mx-4 heading">Filmy <span className='verse'>Verse</span></a>
  <form className="form-inline">
   
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">+ ADD NEW</button>
  </form>
 
  
</nav>

    </>
  )
}

export default Header
