import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup height="3.125rem" size="md">
      <Input
        height="2.1875rem"
        width="17.5rem"
        pr="0.9375rem"
        type={show ? "text" : "password"}
        placeholder="Enter Your password"
      />

      <InputRightElement
        marginRight=".95rem"
        paddingBottom="0.3rem"
        width="4.5rem"
      >
        <Button h="1.7rem" w="3.1rem" fontSize="12px" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
