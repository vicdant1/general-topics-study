import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const MenuItems = () => {
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <MenuItems/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(!toggleMenu)}/> : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(!toggleMenu)}/>}

        {toggleMenu &&  (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <MenuItems/>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar