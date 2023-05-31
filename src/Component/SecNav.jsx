import Nav from "../assets/2page/logo ong.png";
import Service from "../assets/2page/service img.png";
import ProLogo from "../assets/2page/proicon.png";

function NavBar() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={Nav} alt="" />
      </div>
      <div>
        <img src={Service} alt="" />
        <h3>STOCK CHECKER</h3>
      </div>
      <div>
        <a href="#">
          <button>
            <div style={{ display: "flex" }}>
              <img src={ProLogo} alt="" />
              <h4>Sandaya</h4>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
