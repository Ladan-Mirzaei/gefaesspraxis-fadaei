import Slider from "../components/Slider";
import IconMenu from "../components/IconMenu";

import "../styles/Home.css";
import "../styles/Contact.css";


function Contact() {
  return (
    <div className="home">
      <Slider />
      <IconMenu />

<section className="welcome-section">
  <div className="image-container">
  <p>
  <a href="https://www.google.com/maps?q=Schulstraße+38,+53757+Sankt+Augustin" 
   target="_blank" 
   rel="noopener noreferrer">
            Auf Google Maps öffnen
          </a>
        </p> 
        <div className="image-container">
    <img src="53757_praxis-Schulstraße 38.jpeg" alt="Gefäßpraxis Dr.Kambiz Fadaei in Sankt Augustin" />
  </div>
  
         </div>

<div className="text-container">


<h3><strong>Facharzt für Gefäßchirurgie</strong></h3>
<p>Kambiz Fadaei</p>
<p class="adresse"> 
Schulstr. 38 <br/>
53757 Sankt Augusting</p>

<div class="telefonliste">
  <p>Tel.:&nbsp;&nbsp;&nbsp;&nbsp; 01573-2869453</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 02241-9427418</p>
</div>
 {/* <p>Fax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0228 – 763 77 21</p>  */}
<span className="email-container-contact"><p >E-Mail:&nbsp; <a href="mailto:info@gefaesspraxis-fadaei.de">info@gefaesspraxis-fadaei.de</a></p></span>
{/* <p><strong>www.gefaesspraxis-fadaei.de</strong></p> */}
<h3>Telefonische Erreichbarkeit:</h3>
<ul class="öffnungszeiten">
  <li>Montag: 9:00 - 15:00 Uhr</li>
  <li>Dienstag: 9:00 - 15:00, 16:00 - 18:00 Uhr</li>
  <li>Mittwoch: 09:00 - 15:00 Uhr</li>
  <li>Donnerstag: 8:00 - 15:00 Uhr</li>
  <li>Freitag: 9:00 - 15:00 Uhr</li>
</ul>
{/* <p>Mo-Fr:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;9-15 Uhr</p>
<p>Di:&nbsp; 15-18 Uhr</p> */}


		</div>
        
  
       
</section>



      <section className="quote-section">
        <div className="quote-box">
          <p>
            „Es ist der größte Reichtum, gesund zu sein. In einem gesunden
            Körper wohnt ein glücklicher Geist.“
          </p>
          <span>– Deutsches Sprichwort</span>
        </div>
      </section>
    </div>
  );
}

export default Contact;


