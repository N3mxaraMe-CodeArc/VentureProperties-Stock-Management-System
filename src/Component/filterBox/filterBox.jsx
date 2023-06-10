import CancelBtn from "../../assets/SecondFilterBox/cancelBtn.png";
import SelectForms from "./SelectFeild";
import { Input } from "@chakra-ui/react";

function FilterBox() {
  return (
    <div>
      <div className="topic-box">
        <div className="Topic">FILTER STOCK HISTORY</div>
        <div className="cancelImg">
          <img src={CancelBtn} />
        </div>
      </div>
      <div>
        <SelectForms
          selectTopic="Site Name"
          filterPlaceholder=""
          Value1=""
          Value2=""
          Value3=""
        />
        <SelectForms
          selectTopic="Quantity"
          filterPlaceholder=""
          Value1=""
          Value2=""
          Value3=""
        />
        <SelectForms
          selectTopic="Sub Quantity"
          filterPlaceholder=""
          Value1=""
          Value2=""
          Value3=""
        />
      </div>
      <div>
        <div>
          <div className="select-topic">
            <p>date</p>
          </div>
          <div>
            <div>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
