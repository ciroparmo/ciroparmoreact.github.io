import React from "react";
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const numeroProp = 0

const Navbar = ({titulo}) => {
  return (
    <nav>
      <h1 className="logo">{titulo}</h1>
      <ul>
        <li><a href="#"> Inicio </a></li>
        <li><a href="#"> Productos </a></li>
        <li><a href="#"> Contactanos </a></li>
      </ul>
      <CartWidget numero={numeroProp}/>
    </nav>
  )
}

export default Navbar;