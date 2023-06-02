import Nav from "../assets/2page/logo ong.png";

function NavBar() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img style={{width:'12rem',paddingLeft:'1.7rem'}} src={Nav} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
