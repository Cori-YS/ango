import React from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
export default function Auth() {
  function myFunction(event) {
    event.preventDefault();

    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }

  return (
    <>
      <nav>
        <ul className="topnav">
          <li>
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">Início</Link>
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

      <Outlet />
      <div style={{ marginTop: "700px" }}></div>
      <Footer />
    </>
  );
}
