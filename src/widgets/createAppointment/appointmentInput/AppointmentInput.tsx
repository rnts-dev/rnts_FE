import { Input as ChakraInput } from '@chakra-ui/react';

export const AppointmentInput = ({ value, placeholder }: { value: string; placeholder: string }) => {
  return <ChakraInput value={value} placeholder={placeholder} borderColor={'#000000'} />;
};
