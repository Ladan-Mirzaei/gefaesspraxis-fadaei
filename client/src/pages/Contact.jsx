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
          <a
            href="https://www.google.com/maps?q=Am+Wolfsbach+53,+53229+Bonn"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Auf Google Maps öffnen
          </a>
        </p> 
        <div className="image-container">
    <img src="53125_praxis-am-clementiaweg.jpg" alt="praxis-am-clementiaweg" />
  </div>
  
         </div>

<div className="text-container">


<h3><strong>Facharzt für Gefäßchirurgie</strong></h3>
<p>Dr. Kambiz Fadaei</p>
<p>Am Wolfsbach 53</p>
<p>53229 Sankt Augusting</p>
<p>Tel. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0228 – 763 77 20</p>
<p>Fax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0228 – 763 77 21</p>
<p>E-Mail&nbsp;&nbsp; info@hausarzt-brs.de</p>
<p><strong>www.gefaesspraxis-fadaei.de</strong></p>
<h3>Telefonische Erreichbarkeit:</h3>
<p>Mo-Fr:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8-12 Uhr</p>
<p>Mo, Di, Do:&nbsp; 14-17 Uhr</p>


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


