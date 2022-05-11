import { useRef, useState } from "react";
import "./default.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    document.querySelector("#items-holder")?.classList.toggle("active");
  };

  return (
    <nav className="p-2 navbar-container d-flex justify-content-between align-items-center">
      <span className="logo">
        <i className="fas fa-angle-double-up"></i>Avalon
      </span>
      <div className="navbar-items">
        <button className="btn-mobile" onClick={handleToggleMenu}>
          <i className={`fas ${toggleMenu ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>
        <div className="teste">
          <ul id="items-holder" className="d-flex">
            <li onClick={handleToggleMenu}>Despesas</li>
            <li onClick={handleToggleMenu}>Faturamentos</li>
            <li onClick={handleToggleMenu}>Balanço</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
