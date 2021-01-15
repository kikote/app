import React, { useState } from "react";

import "./Header.scss";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    const iconSwitcher = document.getElementsByClassName("menu-switcher")[0];
    if (menuOpen) {
      document.getElementById("sidebar-container").style.display = "none";
      setMenuOpen(false);
      // &#9776; is the hamburger icon
      iconSwitcher.innerHTML = "&#9776;";
    } else {
      document.getElementById("sidebar-container").style.display = "grid";
      document.getElementById("sidebar-container").style.opacity = 1;
      document.getElementById("sidebar-container").style.visibility = "visible";
      setMenuOpen(true);
      // &#10799; is the close icon
      iconSwitcher.innerHTML = "&#10799;";
    }
  };

  return (
    <div className="header">
      <span className="menu-switcher" onClick={handleClick}>
        &#9776;
      </span>
      <div className="header-title">
        <h1>Kikote</h1>
      </div>
    </div>
  );
};

export default Header;
