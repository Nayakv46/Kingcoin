import { React, useState } from 'react'

import './navbar.css';


const Navbar = () => {
  
  const Menu = () => (
    <ul>
      <li><a href='/#home' onClick={() => setToggleMenu(false)}>Home</a></li>
      <li><a href='/#market' onClick={() => setToggleMenu(false)}>Market</a></li>
      <li><a href='/#choose' onClick={() => setToggleMenu(false)}>Choose Us</a></li>
      <li><a href='/#join' onClick={() => setToggleMenu(false)}>Join</a></li>
    </ul>
  )

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleSticky, setToggleSticky] = useState(false);

  window.onscroll = function (e) {
    if(window.scrollY > 0){
      setToggleSticky(true);
    } else {
      setToggleSticky(false);
    }
  }

  return (
    <>

      <nav className={`navbar ${toggleSticky ? `sticky` : null}`}>
        <div className="navbar__content">

          <a href='/'>KINGCOIN</a>

          <Menu />

          <span>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </span>

          <div className="navbar__content-menu">
            {toggleMenu 
              ? <i className="fa-solid fa-x" onClick={() => setToggleMenu(false)}></i>
              : <i className="fa-solid fa-bars-staggered" onClick={() => setToggleMenu(true)}></i>
            }

            {toggleMenu && (
              <div className="navbar__content-menu-container">
                <Menu />
              </div>
            )}
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar