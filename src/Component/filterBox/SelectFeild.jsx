import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

function SelectForms({ Value1, Value2, Value3, selectTopic,filterPlaceholder }) {
  return (
    <div>
      <div className="select-topic">
        <p>{selectTopic}</p>
      </div>
      <div className="input-feild">
        <Select placeholder={filterPlaceholder}>
          <option value={Value1}></option>
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
