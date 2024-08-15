import React from "react";
import {Link} from "react-router-dom";
import Astrologo from "/space-logo.svg";
import "./Navbar.css";

function Navbar({links}) {
  console.log(links);
const navStyles = { 
  color: "white",
}

  return (
    <nav className="nav-container" style={navStyles}>
    <img className="nav-logo" src={Astrologo} alt="space-app-logo"/>
    <h2></h2>
    <div className="links-container">
      {links.map((item) => (
          <Link key={item.id} to={item.href}>
          {item.text}
          </Link>
        ))}
    </div>
    </nav>
  );
}

export default Navbar;