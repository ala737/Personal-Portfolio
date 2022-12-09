import React from 'react'
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className='container'>
        
      <a href='#' className='navbar-brand' ><img className='logo' src={logo}></img></a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <FontAwesomeIcon icon={faBars} style={{color : '#fff',}} />
       </button>

       <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
         
         <ul className='navbar-nav m-auto'>
            <a class="nav-item nav-link" href="#">Home</a>
            <a class="nav-item nav-link" href="#">about me</a>
            <a class="nav-item nav-link" href="#">services</a>
            <a class="nav-item nav-link" href="#">how i work</a>
            <a class="nav-item nav-link" href="#">portfolio</a>
            <a class="nav-item nav-link" href="#">contact</a>
         </ul>
         
       </div>

      </div>

    </nav>

  )
}

export default Navbar