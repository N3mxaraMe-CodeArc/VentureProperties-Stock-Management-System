import { Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function FormInput({Heading , Placeholder}) {
    return ( 
        <div>
            <div>
            <h3><Text as='b'>{Heading}</Text></h3>
            <Input type='Number' placeholder={Placeholder} w="18rem" required />
            </div>
        </div>
     );
}

export default FormInput;