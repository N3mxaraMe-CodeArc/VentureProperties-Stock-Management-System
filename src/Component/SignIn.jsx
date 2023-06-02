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
        <div style={{ marginTop: "34px" }}>
          <div className="input-head">
            <h4>USER NAME</h4>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <Input
              height="2.1875rem"
              width="17.5rem"
              variant="outline"
              placeholder="Enter Your Username"
            />
          </div>
        </div>
        <div style={{ marginTop: "1.9rem" }}>
          <div className="input-head">
            <h4>PASSWORD</h4>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <PasswordInput/>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "3.1rem" }}>
        <Button
          size="md"
          height="2.5rem"
          width="4.5rem"
          border="20px"
          borderColor="green.500"
          borderRadius="10px" // Added border radius of 30px
          backgroundColor="#01313C" // Updated background color to a light green
          color="#fff"
          fontSize="13px"
          _hover={{
            backgroundColor: "#176D50", // Dark green color on hover
          }}
          marginLeft="4%"
          marginBottom="30%"
          marginTop="8%"
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
