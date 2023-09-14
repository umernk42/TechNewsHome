import React from "react";
import { useState } from "react";
import menuClose from "../assets/images/icon-menu-close.svg";
import menuOpen from "../assets/images/icon-menu.svg";

function NavBar({ windowWidth }) {
  const [close, setClose] = useState(true);

  const openMenu = () => {
    setClose(false);
  };

  return (
    <div className="NavBar">
      <h1>W.</h1>
      {windowWidth < 768 && (
        <button onClick={openMenu} className="openMenu">
          <img src={menuOpen} alt="menuOpen" />
        </button>
      )}
      <nav className={close && windowWidth < 768 ? "hide" : "show"}>
        <div>
          {windowWidth < 768 && (
            <button onClick={(e) => setClose(true)}>
              <img src={menuClose} alt="menuClose" />
            </button>
          )}
          <ul>
            <li>
              <a href="#" onClick={(e) => setClose(true)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => setClose(true)}>
                New
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => setClose(true)}>
                Popular
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => setClose(true)}>
                Trending
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => setClose(true)}>
                Categories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
