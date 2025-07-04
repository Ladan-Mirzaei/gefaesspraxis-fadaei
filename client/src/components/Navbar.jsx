import { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>Kambiz Fadaei</span>
          <span className="subtitle">Facharzt für Gefäßchirurgie</span>
          <span className="subtitle">Sankt Augustin</span>
        </div>

        <div className="info">
          <div className="info-item">
            <p>
              Mo - Fr 9.00 - 15.00 <br /> Di 16.00 - 18.30
            </p>
          </div>

          <div className="info-item">
            <p>
               📞 01573-2869453
               &nbsp; 02241-9427418
              <br /> Schulstr. 38, 53757 Sankt Augustin
            </p>
          </div>
        </div>
      </div>

      <div className="nav">
        {/* Hamburger Menu Button  */}
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
            <NavLink to="/" onClick={handleMenuItemClick}>
              Startseite
            </NavLink>
          </li>
          <li>
            <NavLink to="/leistungen" onClick={handleMenuItemClick}>
              Leistungen
            </NavLink>
          </li>
          <li>
          <a
            href="https://www.doctolib.de/einzelpraxis/sankt-augustin/gefaesschirurgische-praxis-dr-fadaei"
            
            target="_blank"
            rel="noopener noreferrer"
          >              Termin
            </a>
          </li>
          <li>
            <a href="#team" onClick={handleMenuItemClick}>
              Unser Team
            </a>
          </li>
          <li>
          <NavLink to="/kontakt-anfahrt" onClick={handleMenuItemClick}> Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
