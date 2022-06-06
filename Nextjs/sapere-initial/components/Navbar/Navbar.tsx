import Image from "next/image";
import UserButton from "../UserButton/UserButton";
import style from './navbar.module.css';
import useOnClickOutside from '../../utils/useOnClickOutside';
import { FaBars, FaTimes } from 'react-icons/fa'
import { LegacyRef, useRef, useState, useEffect } from "react";

const Navbar = () => {  
  const [toggleButton, setToggleButton] = useState<Boolean>(false);
  const navRef = useRef() as LegacyRef<HTMLUListElement> | undefined;
  
  useOnClickOutside(navRef, () => setToggleButton(false));
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 576)
        setToggleButton(false);
    })
  }, []);


  return (
    <nav className={`bg-dark ${style.navContainer} p-2`} ref={navRef}>
      <div>
        <Image src="/images/AvalonShortLogo.svg" alt="Avalon Logo" width={40} height={40} />
      </div>
      <ul className={`${style.navItems} ${toggleButton ? style.active : style.inactive } `}>
        <li className={`${style.navItem}`}>
          <a className="link-expand" href="/">Link</a>
        </li>
        <li className={`${style.navItem}`}>
          <a className="link-expand" href="/">Link</a>
        </li>
        <li className={`${style.navItem}`}>
          <a className="link-expand" href="/">Link</a>
        </li>
        <li className={`${style.navItem} dropdown`}>
          <a className="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>

      <div className="d-flex align-items-center">
        <UserButton image={"/images/Avalon.png"} username="vicdant1" />
        <button className={`${style.toggleButton} px-1`} onClick={() => setToggleButton(!toggleButton)}>
          {toggleButton ? <FaTimes/> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;