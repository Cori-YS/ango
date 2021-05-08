import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function myFunction(event) {
    event.preventDefault();

    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }

  return (
    <>
      <nav>
        <ul className="topnav">
          <li>
            <Link to="/home">
              <img src="img/logo.png" alt="" />
            </Link>
          </li>

          <li>
            <Link to="/home">Início</Link>
          </li>

          <li>
            <Link to="/entrar">Login</Link>
          </li>
          <li className="icon">
            <a href=" " onClick={myFunction}>
              &#9776;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
