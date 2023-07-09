import React from 'react'
import'../Components/Header.css'


function Header() {
  return (
    <>
    <nav className="navbar navbar-light border-bottom display: flex;">
  <a className="navbar-brand text-danger mx-0 heading">Filmy <span className='verse'>Verse</span></a>
  <form className="form-inline">
   
    <button className="btn btn-outline-success my-0 my-sm-0 " type="submit"><b> + ADD NEW</b></button>
  </form>
 
  
</nav>

    </>
  )
}

export default Header
