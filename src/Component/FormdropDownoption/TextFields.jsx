import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import PropTypes from 'prop-types';


function FormInput({ Heading, Placeholder }) {
  return (
    <div>
      <div>
        <h3>
          <Text mb="0.2rem" as="b">
            {Heading}
          </Text>
        </h3>
        <Input
          color="green"
          fontWeight={600}
          mb="0.5rem"
          variant="outline"
          focusBorderColor="green.400"
          style={{ width: "21rem", border: "" }}
          type="Number"
          placeholder={Placeholder}
          w="18rem"
          
        />
      </div>
    </div>
  );
}

FormInput.propTypes ={
  Placeholder: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
};

export default FormInput;
