function Slider() {
  return (
    <div className="slider">
      <div className="slide">
        <p>
          Vereinbaren Sie jetzt Ihren Termin <br/>einfach und bequem über Doctolib.
        </p>
        <button>
        <a
            href="https://www.doctolib.de/einzelpraxis/sankt-augustin/gefaesschirurgische-praxis-dr-fadaei"
            className="appointment-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termin buchen
            <img
              src="https://pro.doctolib.de/external_button/doctolib-white-transparent.png"
              alt="Doctolib"
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Slider;
