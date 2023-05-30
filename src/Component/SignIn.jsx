import Logo from "../assets/loginpop/POPUP LOGO.png";
import { Input } from "@chakra-ui/react";
import PasswordInput from "./PasswprdBox";
import { Button } from "@chakra-ui/react";
import "../Component/css/Signin.css";

function SignIn() {
  return (
    <div className="full-sign">
      <div>
        <img className="logo-img" src={Logo} alt="Logo" />
      </div>

      <div style={{ margin: "4%" }}>
        <div style={{marginTop:'34px'}}>
          <div className="input-head">
            <h4>USER NAME</h4>
          </div>
          <div style={{marginTop:'22px'}}>
            <Input height={50} variant="outline" placeholder="Enter Your Username" />
          </div>
        </div>
        <div style={{marginTop:'44px'}}>
          <div className="input-head">
            <h4>PASSWORD</h4>
          </div>
          <div style={{marginTop:'22px'}}>
            <PasswordInput height={50} />
          </div>
        </div>
      </div>
      <div style={{marginTop:'44px'}}>
        <Button onClick={() =>{
            alert("Loading...")
        }}
          size="md"
          height="45px"
          width="120px"
          border="20px"
          borderColor="green.500"
          borderRadius="10px" // Added border radius of 30px
          backgroundColor="#01313C" // Updated background color to a light green
          color="#fff"
          _hover={{
            backgroundColor: "#176D50", // Dark green color on hover
          }}
          marginLeft="4%"
          marginBottom="30%"
          marginTop="12%"
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
