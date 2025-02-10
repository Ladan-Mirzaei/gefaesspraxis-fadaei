import Slider from "../components/Slider";
import "../styles/Home.css";
import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <Slider />

      <section className="features">
        <div className="feature">
          <FaStethoscope size={30} color="#295590" />
          <p>Vorsorgeuntersuchungen</p>
        </div>
        <div className="feature">
          <FaUserMd size={30} color="#295590" />
          <p>Häusliche Versorgung</p>
        </div>
        <div className="feature">
          <FaHospital size={30} color="#295590" />
          <p>Diagnostik</p>
        </div>
        <div className="feature">
          <FaHeartbeat size={30} color="#295590" />
          <p>Krankheitsbilder</p>
        </div>
      </section>

      <section className="welcome-section">
  <div className="image-container">
    <img src="medical-home-5668.jpg" alt="Dr. Kambiz Fadaei" />
  </div>

  <div className="text-container">
    <h1>
    Herzlich willkommen in Ihrer Praxis für Gefäßmedizin

    </h1>

    <p>
    Gesunde Gefäße sind essenziell für Ihr Wohlbefinden und Ihre Lebensqualität. In unserer spezialisierten Praxis für Gefäßchirurgie und Endovaskuläre Chirurgie bieten wir Ihnen eine präzise Diagnostik, modernste Behandlungsmethoden und eine persönliche Betreuung auf höchstem medizinischen Niveau.
    </p>
    <p>
    <strong>Dr. Kambiz Fadaei und sein erfahrenes Team</strong> begleiten Sie kompetent bei der Behandlung von arteriellen und venösen Gefäßerkrankungen – von Krampfadern über Durchblutungsstörungen bis hin zu minimalinvasiven Gefäßeingriffen. Unsere Philosophie: individuelle Therapie, schonende Verfahren und nachhaltige Prävention.
    </p>
    <p>
    Ob Routineuntersuchung oder spezialisierte Therapie – wir stehen Ihnen mit Fachwissen, innovativen Methoden und einer patientenorientierten Beratung zur Seite. Vereinbaren Sie noch heute einen Termin und lassen Sie uns gemeinsam für Ihre Gefäßgesundheit sorgen.
    </p>
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

export default Home;
