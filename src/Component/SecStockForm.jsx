// import React, { useState } from "react";
import cart from "../assets/2page/cart.png";
import Option from "./FormdropDownoption/option";
import Input from "./FormdropDownoption/TextFields";
import { Button } from "@chakra-ui/react";
import Right from "../assets/2page/rigth mark.png";
import "./FormdropDownoption/Form.css";
// import { useState } from "react";

function StockForm() {
  //   const [formData, setFormData] = useState({});

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //   };

  return (
    <div>
      <div className="container">
        <div>
          <img src={cart} alt="" />
          <h3>ADD ITEMS</h3>
        </div>
        <div>
          <Option
            Heading={"SITE NAME"}
            Placeholder={"Select the site Name"}
            Value1={"Mankulam"}
            Value2={"Colombo"}
            Value3={"Madirigiriya"}
          />
          <Option
            Heading={"ITEM"}
            Placeholder={"Enter your Item type"}
            Value1={"Metal"}
            Value2={"Stone"}
            Value3={"Cement"}
          />
          <Option
            Heading={"SUB-CATERGORY"}
            Placeholder={"Select Your Sub Category"}
            Value1={"Metal"}
            Value2={"Stone"}
            Value3={"Cement"}
          />
          <Input Placeholder={"Enter the quantity"} Heading={"QUANTITY"} />
          <Input Placeholder={"Price of a Quantity "} Heading={"ONE OF PER"} />
        </div>
        <div className="btn-sum-lay">
          <h3 className="Sum-txt">SUM : </h3>
          <Button
            w="6.5rem"
            marginBottom=".8rem"
            marginLeft="7.5rem"
            fontSize="0.8rem"
            colorScheme="teal"
            variant="solid"
          >
            {" "}
            <img
              style={{
                width: "1.7rem",
                marginRight: ".6rem",
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
