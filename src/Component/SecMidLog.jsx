import Service from "../assets/2page/service img.png";
import './css/SecMidLogo.css'

function SecMidLogo() {
  return (
    <div style={{ display: "flex" }}>
      <img className="mid-logo-service" src={Service} alt="" />
      <h3 className="sec-mid-title">STOCK CHECKER</h3>
    </div>
  );
}

export default SecMidLogo;
