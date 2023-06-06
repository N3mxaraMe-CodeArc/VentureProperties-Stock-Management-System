import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

import cart from "../assets/2page/cart.png";
import Option from "./FormdropDownoption/option";
import Input from "./FormdropDownoption/TextFields";
import Right from "../assets/2page/rigth mark.png";
import "./FormdropDownoption/Form.css";

function StockForm() {
  const [Quantity, setQuantity] = useState(1);
  const [Price, setPrice] = useState(1);
  const [Total, setTotal] = useState(1);
  const [SiteName, setSiteName] = useState("");
  const [Item, setItem] = useState("");
  const [SubItem, setSubItem] = useState("");
  const [showAll, setShowAll] = useState(false);

  const Sum = (e) => {
    setPrice(e.target.value);
    setQuantity(e.target.value);
  };

  const ShowAll = () => {
    return (
      <div style={{ display: "flex", margin: "2rem" }}>
        <h2>{Quantity}</h2>
        <h2>{Price}</h2>
        <h2>{SiteName}</h2>
        <h2>{Item}</h2>
        <h2>{SubItem}</h2>
      </div>
    );
  };

  useEffect(() => {
    const multipliedValue = Quantity * Price;
    setTotal(multipliedValue);
  }, [Quantity, Price]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setShowAll(true);
  };

  return (
    <div>
      <form onSubmit={SubmitHandler} action="">
        <div className="container">
          <div className="topic-form" style={{ display: "flex" }}>
            <img
              style={{ width: "1.5rem", marginRight: ".6rem" }}
              src={cart}
              alt=""
            />
            <h3 style={{ fontSize: "1.4rem" }}>ADD ITEMS</h3>
          </div>
          <div>
            <Option
              onChange={(e) => {
                setSiteName(e.target.value);
              }}
              Heading={"SITE NAME : "}
              Placeholder={"Select the site Name"}
              Value1={"Mankulam"}
              Value2={"Colombo"}
              Value3={"Madirigiriya"}
            />
            <Option
              onChange={(e) => {
                setItem(e.target.value);
              }}
              Heading={"ITEM : "}
              Placeholder={"Enter your Item type"}
              Value1={"Metal"}
              Value2={"Stone"}
              Value3={"Cement"}
            />
            <Option
              onChange={(e) => {
                setSubItem(e.target.value);
              }}
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
              onClick={SubmitHandler}
              type="submit"
              w="6.5rem"
              position="absolute"
              marginBottom=".8rem"
              marginLeft="14.5rem"
              fontSize="0.8rem"
              colorScheme="teal"
              variant="solid"
            >
              <img
                style={{
                  width: "1.7rem",
                  marginRight: ".2rem",
                }}
                src={Right}
                alt=""
              />
              <div style={{ marginRight: "0.8rem" }}>CONFIRM</div>
            </Button>
          </div>
        </div>
      </form>
      <div>
        {showAll && <ShowAll />} 
      </div>
    </div>
  );
}

export default StockForm;
