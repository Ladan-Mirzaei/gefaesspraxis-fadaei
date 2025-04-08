import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";

function IconMenu() {
    return (
      <section className="features">
      <div className="feature">
        <FaStethoscope size={30} color="#295590" />
        <p>Vorsorgeuntersuchungen</p>
      </div>
      <div className="feature">
        <FaUserMd size={30} color="#295590" />
        <p>Haubesuch nach Terminvereinbarung</p>
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
    );
  }
  
  export default IconMenu;
  