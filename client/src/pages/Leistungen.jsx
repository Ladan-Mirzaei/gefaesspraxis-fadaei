import Slider from "../components/Slider";
import "../styles/Home.css";
import "../styles/Leistung.css";

import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";

function behandlung_Gefaesserkrankungen() {
  return (
    <div className="home">
      <Slider />

      {/* <section className="features">
        <div className="feature">
          <FaStethoscope size={50} color="#295590" />
          <p>Vorsorgeuntersuchungen</p>
        </div>
        <div className="feature">
          <FaUserMd size={50} color="#295590" />
          <p>Hausärztliche Versorgung</p>
        </div>
        <div className="feature">
          <FaHospital size={50} color="#295590" />
          <p>Diagnostik</p>
        </div>
        <div className="feature">
          <FaHeartbeat size={50} color="#295590" />
          <p>Kardiologie</p>
        </div>
      </section> */}

      <section className="welcome-section">
  <div className="image-container">
    <img src="leistung.jpg" alt="Dr. Kambiz Fadaei" />
  </div>

  <div className="text-container">
    <h3>
    Ihre Gefäßgesundheit im Fokus
    </h3>

    <p>
    Eine Vielzahl an Gefäßerkrankungen lässt sich auch ohne einen operativen Eingriff 
    gut behandeln. Dabei richtet sich das Therapiemittel vor allem nach dem Fortschritt 
    der Gefäßerkrankung. In unserer Praxis ist Dr. Streminski der Experte für die schonende,
     konservative Behandlung von Gefäßerkrankungen: Mit individuell angepassten Behandlungsmaßnahmen 
     kümmern er und seine Kollegen sich um die Behandlung von arteriellen Durchblutungsstörungen, 
     Gefäßverengungen, Besenreisern, offenen Beinen sowie Beinschwellungen und Ödemen.
    </p>
    {/* <h1>Operative Therapien zur Krampfadern Behandlung</h1>

    <p>
    Viele Patienten kommen mit dem Wunsch ihre Krampfadern behandeln zu lassen in das Gefäßzentrum am Rudolfplatz in Köln. Damit sind sie bei uns in den besten Händen – als Gefäßspezialisten haben wir schon viele tausend Krampfaderoperationen erfolgreich durchgeführt. Die operative Krampfadern Behandlung gehört heute zu den Routineeingriffen und wird in der Praxis ambulant durchgeführt. Die angebotenen  modernen und minimalinvasiven Therapieverfahren VenaSeal, Venous Closure Fast, Stripping, CHIVA und Mikroschaum-Sklerosierung machen eine äußerst sichere und schonende Entfernung der Krampfadern möglich. Gerne beraten Sie Dr. Müller und Kollegen im Vorfeld zu der individuell passenden Behandlungsmethode.

.
    </p>
    <h1>Weitere Behandlungen im Gefäßzentrum am Rudolfplatz Köln</h1>

    <p>
    Sie benötigen einen Port oder leiden unter einem Leistenbruch? Neben der konservativen und operativen Behandlung von Gefäßerkrankungen, kümmern wir uns im Gefäßzentrum am Rudolfplatz in Köln auch kurzfristig um die Implantation eines venösen Dauerverweilsystems (Port). Zusätzlich führen wir im angegliederten Hernienzentrum Rudolfplatz Leistenbruch-Operationen kompetent durch.
    </p> */}
  </div>

  
</section>



<div className="blue-icon-list"><ul >
<li><h3>Individuelle Gesundheitsleistungen (IGEL)</h3></li>
    <li>Ausführliche Gesundheits- und Vorsorgeuntersuchung (einmalig vor dem 35. und ab dem 35. Lebensjahr alle 3 Jahre)</li>
    <li>Geriatrische Betreuung</li>
    <li>Beratung und Begleitung chronischer Krankheiten</li>
    <li>Teilnahme am strukturierten Behandlungsprogramm (DMP) der Krankenkassen für:</li>
    <ul>
      <li><h3>Individuelle Gesundheitsleistungen (IGEL)</h3></li>
        <li>Koronare Herzerkrankung (KHK)</li>
        <li>Diabetes mellitus</li>
        <li>Asthma und COPD</li>
        <li>Herzinsuffizienz</li>
    </ul>
</ul></div>
    </div>
  );
}

export default behandlung_Gefaesserkrankungen;
