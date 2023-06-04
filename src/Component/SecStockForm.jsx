import cart from "../assets/2page/cart.png";
import Option from "./FormdropDownoption/option";
import Input from "./FormdropDownoption/TextFields";
import { Button } from "@chakra-ui/react";
import Right from "../assets/2page/rigth mark.png";
import "./FormdropDownoption/Form.css";
import { useState,useEffect } from "react";

function StockForm() {
  const [Quantity, setQuantity] = useState(0);
  const [Price, setPrice] = useState(0);
  const [Total, setTotal] = useState("")
  

  const Sum = (event) =>{
    setPrice(event.target.value);
    console.log(Price);
    setQuantity(event.target.value);
    console.log(Quantity);
  }

  useEffect(() => {
    const multipliedValue = Quantity * Price;
    setTotal(multipliedValue);
  }, [Quantity, Price]);

  return (
    <div>
      <div className="container">
        <div className="topic-form" style={{ display: "flex" }}>
          <img
            style={{ width: "1.5rem", marginRight: ".6rem" }}
            src={cart}
            alt=""
          />
          <h3 style={{fontSize:'1.4rem'}}>ADD ITEMS</h3>
        </div>
        <div>
          <Option
            Heading={"SITE NAME : "}
            Placeholder={"Select the site Name"}
            Value1={"Mankulam"}
            Value2={"Colombo"}
            Value3={"Madirigiriya"}
          />
          <Option
            Heading={"ITEM : "}
            Placeholder={"Enter your Item type"}
            Value1={"Metal"}
            Value2={"Stone"}
            Value3={"Cement"}
          />
          <Option
            Heading={"SUB-CATERGORY : "}
            Placeholder={"Select Your Sub Category"}
            Value1={"Metal"}
            Value2={"Stone"}
            Value3={"Cement"}
          />
          <Input
            value={Quantity}
            onChange={Sum}
            Placeholder={"Enter the quantity  "}
            Heading={"QUANTITY : "}
          />

          <Input
            value={Price}
            onChange={Sum}
            Placeholder={"Price of a Quantity  "}
            Heading={"ONE OF PER : "}
          />
        </div>
        <div className="btn-sum-lay">
          <h3 className="Sum-txt">SUM: RS.{Total} </h3>

          <Button 
            w="6.5rem"
            position="absolute"
            marginBottom=".8rem"
            marginLeft="14.5rem"
            fontSize="0.8rem"
            colorScheme="teal"
            variant="solid"
          >
            {" "}
            <img
              style={{
                width: "1.7rem",
                marginRight: ".2rem",
              }}
              src={Right}
              alt=""
            />{" "}
            <div style={{ marginRight: "0.8rem" }}>CONFIRM</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StockForm;
