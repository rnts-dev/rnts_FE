import { Input as ChakraInput } from '@chakra-ui/react';
import { useState } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const { placeholder } = props;
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <ChakraInput value={value} onChange={handleChange} placeholder={placeholder} borderColor={'#000000'} />;
};

export default Input;
