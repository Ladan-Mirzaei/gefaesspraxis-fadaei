import { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>Dr. Kambiz Fadaei</span>
          <span className="subtitle">Facharzt für Gefäßchirurgie</span>
          <span className="subtitle">Sankt Augustin</span>

        </div>

        {/* Hamburger Menu Button - Only visible on small screens */}
        <button
          className="hamburger sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={isOpen ? "line line1 open" : "line line1"}></span>
          <span className={isOpen ? "line line2 open" : "line line2"}></span>
          <span className={isOpen ? "line line3 open" : "line line3"}></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/">Startseite</NavLink>
          </li>
          {/* <li>
          <NavLink to="/behandlung-gefaesserkrankungen">Krankheitsbilder</NavLink>
          </li>
          <li>
          <NavLink to="/behandlung-gefaesserkrankungen">Diagnostik</NavLink>
          </li>
           */}
          <li>
          <NavLink to="/behandlung-gefaesserkrankungen">Leistungen</NavLink>
          </li>
          <li>
          <NavLink to="/behandlung-gefaesserkrankungen">Termin</NavLink>
          </li>
          <li>
            <a href="#team">Unser Team</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
