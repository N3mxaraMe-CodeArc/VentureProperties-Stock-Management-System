import { Select } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

function Option({ Placeholder, Value1 , Value2 ,Value3,Heading }) {
    return ( 
        <div>
            <h3><Text  as='b'>{Heading}</Text></h3>
            <Select placeholder={Placeholder} w="18rem" required>
            <option value={Value1}>{Value1}</option>
            <option value={Value2}>{Value2}</option>
            <option value={Value3}>{Value3}</option>
          </Select>
        </div>
     );
}

export default Option;