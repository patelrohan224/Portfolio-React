import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div id="nav-bar">
        <nav>
          <NavLink
            to= "/"
            className="link"
            activeClassName="active-nav"
            exact
          >
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            to= "/about"
            className="link"
            activeClassName="active-nav"
          >
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT</div>
            </div>
          </NavLink>
          <NavLink
            to= "/skills"
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-cogs fa-2x"></i>
            <div className="overlay">
              <div className="text">SKILLS</div>
            </div>
          </NavLink>
          <NavLink
            to= "/work"
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-eye fa-2x"></i>
            <div className="overlay">
              <div className="text">MY WORK</div>
            </div>
          </NavLink>
          <NavLink
            to= "/contact"
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://codesandbox.io/dashboard/home?workspace=2e78f97a-7867-4167-bba8-0d69c9552da6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@tancentgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium"></i>
            </a>
          </li>
        
        </ul>
      </div>

      <Link className="bkmrk" target="_blank"
        to="/resume"
      >
        <img
          src="https://raw.githubusercontent.com/smrnjeet222/smrnjeet222/master/assets/blogdark.png"
          alt="Resume"
        />
        <span className="folded-corner"></span>
      </Link>
    </>
  );
}
