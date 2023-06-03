import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

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
          required
        />
      </div>
    </div>
  );
}

export default FormInput;
