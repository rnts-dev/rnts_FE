import { Input as ChakraInput } from '@chakra-ui/react';

const AppointmentInput = ({ value, placeholder }: { value: string; placeholder: string }) => {
  return <ChakraInput value={value} placeholder={placeholder} borderColor={'#000000'} />;
};

export default AppointmentInput;
