import React from "react";
import "../styles//Footer.css"; 

export default function Footer() {
  return (
    <div>
      <div className="main-content">
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-first-row">
            {/* Left Section */}
            <div className="footer-left">
              <h4>MVZ Das Gefäßzentrum am Rudolfplatz</h4>
              <p>Schulstraße 38, 53757 Sankt Augustin</p>
              {/* <p>Fon: +49 (0)221 / 924 75 - 0</p> */}
              <p>Email: <a href="mailto:info@gefaesspraxis-fadaei.de">info@gefaesspraxis-fadaei.de</a></p>
            </div>

            {/* Right Section */}
            <div className="footer-right">
              <h5>Unsere Sprechzeiten:</h5>
              <ul>
                <li>Montag: 9:00 - 13:00, 14:00 - 19:00 Uhr</li>
                <li>Dienstag: 9:00 - 13:00, 14:00 - 19:00 Uhr</li>
                <li>Mittwoch: 09:00 - 13:00 Uhr</li>
                <li>Donnerstag: 9:00 - 13:00, 14:00 - 19:00 Uhr</li>
                <li>Freitag: 09:00 - 13:00 Uhr</li>
              </ul>
              <p>Behandlung nur nach Terminvereinbarung!

</p>

              {/* <h5>Rezeptabholung:</h5>
              <ul>
                <li>Mo, Di, Do: bis 16 Uhr</li>
                <li>Mi, Fr: bis 13 Uhr</li>
              </ul> */}
            </div>
          </div>

          {/* Second Row: Bottom Section */}
          <div className="footer-bottom">
            <p>Copyright © 2016 - 2025 alle Rechte vorbehalten</p>
            {/* <p><a href="/impressum">Impressum</a></p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
