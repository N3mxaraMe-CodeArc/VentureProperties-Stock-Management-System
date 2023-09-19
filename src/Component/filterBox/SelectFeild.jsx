import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./filterbox.css";

function SelectForms({
  Value1,
  Value2,
  Value3,
  selectTopic,
  filterPlaceholder,
}) {
  return (
    <div>
      <div className="select-topic">
        <p className="filter-topics">{selectTopic}</p>
      </div>
      <div className="input-feild">
        <Select
          fontWeight="600"
          color="000"
          className="inputTOpic"
          textColor="rgba(75, 75, 75, 0.8)"
          marginBottom="0.6rem"
          fontSize=".8rem"
          textTransform="uppercase"
          borderRadius="1rem"
          paddingTop="0.2rem"
          placeholder={filterPlaceholder}
          
        >
          <option value={Value1} disabled></option>
          <option value={Value2}></option>
          <option value={Value3}></option>
        </Select>
      </div>
    </div>
  );
}

SelectForms.propTypes = {
  selectTopic: PropTypes.string.isRequired,
  filterPlaceholder: PropTypes.string.isRequired,
  Value1: PropTypes.string.isRequired,
  Value2: PropTypes.string.isRequired,
  Value3: PropTypes.string.isRequired,
};

export default SelectForms;
