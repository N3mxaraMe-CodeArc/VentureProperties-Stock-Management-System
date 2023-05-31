import ProLogo from "../assets/2page/proicon.png";
import { Button } from "@chakra-ui/react";

function SecLoginBtn() {
    return ( 
        <div>
        <div style={{ display: "flex" }}>
          <Button
            w={150}
            h={50}
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
                  <h4 style={{ color: "white", marginRight: "55px" }}>
                    Sandaya
                  </h4>
                  <h6
                    style={{
                      color: "white",
                      marginRight: "55px",
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