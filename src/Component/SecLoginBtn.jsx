import ProLogo from "../assets/2page/proicon.png";
import { Button } from "@chakra-ui/react";

function SecLoginBtn() {
    return ( 
        <div>
        <div style={{ display: "flex" }}>
          <Button
            w={125}
            h={46.5}
            marginLeft='0.5rem'
            marginTop='0.4rem'
            colorScheme="teal"
            variant="solid"
            _hover={{
              backgroundColor: "#176D50",
              color: "#fff",
            }}
          >
            <a href="#">
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "40px", marginRight: "10px" }}
                  className="prologo"
                  src={ProLogo}
                  alt=""
                />
                <div style={{}}>
                  <h4 style={{ color: "white", marginRight: "2.7rem" }}>
                    Sandaya
                  </h4>
                  <h6
                    style={{
                      color: "white",
                      marginRight: "2.7rem",
                      fontSize: "0.58rem",
                      paddingTop: "0.3rem",
                    }}
                  >
                    Switch Acount
                  </h6>
                </div>
              </div>
            </a>
          </Button>
        </div>
      </div>
     );
}

export default SecLoginBtn;