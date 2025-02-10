import Slider from "../components/Slider";
import IconMenu from "../components/IconMenu";

import "../styles/Home.css";
import "../styles/HealthInfo.css";

function HealthInfo() {
  return (
    <div className="home">
      <Slider />
      <IconMenu />

      <div class="text-health-container">
    <h2><span></span> Erkrankungen des Auges <span></span></h2>
    <p>Ob grauer oder grüner Star, Veränderung der Netzhaut oder Trübung des Glaskörpers, ob Infektion oder altersbedingte Veränderung: auch das Auge kann auf unterschiedlichste Art und Weise erkranken.</p>
    <p>An dieser Stelle möchten wir Ihnen die wichtigsten Augenkrankheiten vorstellen. Natürlich dienen diese Informationen nicht der Selbstdiagnose, denn komplex wie das Auge selbst ist auch das sichere Erkennen seiner Erkrankungen. Sie sollen lediglich aufzeigen, welche Augenerkrankungen am häufigsten auftreten.</p>
</div>

    <div class="health-container">

<section class="erkrankung">
            <h2>„Grauer Star" (Cataract) & Nachstar</h2>
            <p>Die Trübung der Augenlinse = „Grauer Star" ist weltweit die häufigste Erblindungsursache. In den Industrienationen steht ein millionenfach ...</p>
        </section>

        <section class="erkrankung">
            <h2>„Grüner Star" (Glaukom)</h2>
            <p>Als „Grüner Star" wird eine Erkrankung des Sehnervs bezeichnet, die schleichend und unbemerkt beginnt und ohne rechtzeitige Behandlung unwiderruflich ...</p>
        </section>

        <section class="erkrankung">
            <h2>Altersbedingte Maculadegeneration (AMD)</h2>
            <p>Bei der altersbedingten Macula-degeneration kommt es im meist höheren Lebensalter zu einem Untergang von Zellen und Schichten in der (mehr...)</p>
        </section>
       </div>



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

export default HealthInfo;


