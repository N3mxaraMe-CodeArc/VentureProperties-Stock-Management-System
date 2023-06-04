import { Select } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

function Option({ Placeholder, Value1, Value2, Value3, Heading }) {
  return (
    <div>
      <h3>
        <Text as="b">{Heading}</Text>
      </h3>
      <Select
        style={{ width: "21rem" }}
        color="gray"
        fontWeight={400}
        focusBorderColor="green.400"
        mb="0.5rem"
        placeholder={Placeholder}
        w="18rem"
        
      >
        <option style={{}} value={Value1}>
          {Value1}
        </option>
        <option value={Value2}>{Value2}</option>
        <option value={Value3}>{Value3}</option>
      </Select>
    </div>
  );
}


Option.propTypes ={
  Placeholder: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
  Value1: PropTypes.string.isRequired,
  Value2: PropTypes.string.isRequired,
  Value3: PropTypes.string.isRequired,
};

export default Option;
