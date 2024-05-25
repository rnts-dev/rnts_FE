import { ChangeEvent, forwardRef } from 'react';
import './input.scss';

interface PrimaryInputProps {
  value: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: any;
}

const Input = forwardRef<HTMLInputElement, PrimaryInputProps>(({ value, placeholder, onChange, inputRef }: PrimaryInputProps) => {
  return <input ref={inputRef} className="primary_input" type="text" value={value} placeholder={placeholder} onChange={onChange} />;
});

export default Input;
