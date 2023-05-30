import React from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup height={50} size='md'>
      <Input height={50}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter Your password'
      />
      <InputRightElement paddingTop='0.6rem' width='4.5rem'>
        <Button h='2.5rem'  size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
