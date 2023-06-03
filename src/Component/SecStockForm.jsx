// import React, { useState } from "react";
import cart from "../assets/2page/cart.png";
import Option from './FormdropDownoption/option'
import Input from "./FormdropDownoption/TextFields";
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
          <Option Heading={"SITE NAME"} Placeholder={"Select the site Name"} Value1={"Mankulam"} Value2={"Colombo"} Value3={"Madirigiriya"}/>
          <Option Heading={"ITEM"} Placeholder={"Enter your Item type"} Value1={"Metal"} Value2={"Stone"} Value3={"Cement"}/>
          <Option Heading={"SUB-CATERGORY"} Placeholder={"Select Your Sub Category"} Value1={"Metal"} Value2={"Stone"} Value3={"Cement"}/>
          <Input Placeholder={"Enter the quantity"} Heading={"Quantity"} />
          <Input Placeholder={"Price of a Quantity "} Heading={"ONE OF PER"} />
        </div>
      </div>
    </div>
  );
}

export default StockForm;
