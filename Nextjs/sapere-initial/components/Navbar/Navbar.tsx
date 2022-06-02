import Image from "next/image";
import style from './navbar.module.css';


const Navbar = () => {
  return (
    <nav className={`bg-dark ${style.navContainer} p-2`}>
      <div>
        <Image src="/images/LogoAvalon.svg" alt="Avalon Logo" width={100} height={40} />
      </div>

      <ul className={`${style.navItems}`}>
        <li className={`${style.navItem}`}>
          <a href="/">Link</a>
        </li>
        <li className={`${style.navItem}`}>
          <a href="/">Link</a>
        </li>
        <li className={`${style.navItem}`}>
          <a href="/">Link</a>
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

      <div>
        <button>User area</button>
        <button>toggler</button>
      </div>


    </nav>
  );
}

export default Navbar;