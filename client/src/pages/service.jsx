import Slider from "../components/Slider";
import "../styles/Home.css";
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

      <section className="features">
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
      </section>

      {/* Willkommen-Text-Bereich */}
      <section className="welcome-section">
  <div className="image-container">
    <img src="images.jpeg" alt="Dr. Kambiz Fadaei" />
  </div>

  <div className="text-container">
    <h1>
    Konservative Therapien zur Behandlung von Besenreisern, offenen Beinen und Co.

    </h1>

    <p>
    Eine Vielzahl an Gefäßerkrankungen lässt sich auch ohne einen operativen Eingriff 
    gut behandeln. Dabei richtet sich das Therapiemittel vor allem nach dem Fortschritt 
    der Gefäßerkrankung. In unserer Praxis ist Dr. Streminski der Experte für die schonende,
     konservative Behandlung von Gefäßerkrankungen: Mit individuell angepassten Behandlungsmaßnahmen 
     kümmern er und seine Kollegen sich um die Behandlung von arteriellen Durchblutungsstörungen, 
     Gefäßverengungen, Besenreisern, offenen Beinen sowie Beinschwellungen und Ödemen.
    </p>
    <h1>Operative Therapien zur Krampfadern Behandlung</h1>

    <p>
    Viele Patienten kommen mit dem Wunsch ihre Krampfadern behandeln zu lassen in das Gefäßzentrum am Rudolfplatz in Köln. Damit sind sie bei uns in den besten Händen – als Gefäßspezialisten haben wir schon viele tausend Krampfaderoperationen erfolgreich durchgeführt. Die operative Krampfadern Behandlung gehört heute zu den Routineeingriffen und wird in der Praxis ambulant durchgeführt. Die angebotenen  modernen und minimalinvasiven Therapieverfahren VenaSeal, Venous Closure Fast, Stripping, CHIVA und Mikroschaum-Sklerosierung machen eine äußerst sichere und schonende Entfernung der Krampfadern möglich. Gerne beraten Sie Dr. Müller und Kollegen im Vorfeld zu der individuell passenden Behandlungsmethode.

.
    </p>
    <h1>Weitere Behandlungen im Gefäßzentrum am Rudolfplatz Köln</h1>

    <p>
    Sie benötigen einen Port oder leiden unter einem Leistenbruch? Neben der konservativen und operativen Behandlung von Gefäßerkrankungen, kümmern wir uns im Gefäßzentrum am Rudolfplatz in Köln auch kurzfristig um die Implantation eines venösen Dauerverweilsystems (Port). Zusätzlich führen wir im angegliederten Hernienzentrum Rudolfplatz Leistenbruch-Operationen kompetent durch.
    </p>
  </div>
</section>



      {/* Zitat-Bereich */}
     
    </div>
  );
}

export default behandlung_Gefaesserkrankungen;
