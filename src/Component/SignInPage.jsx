import MainBack from "../assets/loginpop/Home Slide.png";
import MainLogo from "../assets/loginpop/SigninPageLogo.png";
import './css/MainSigninPage.css'

function Main() {
  return (
    <div className="full-block">
      <div className="main-image">
        <img src={MainBack} alt="" />
      </div>
      <div className="main-logo">
        <img src={MainLogo} alt="" />
      </div>
    </div>
  );
}

export default Main;
