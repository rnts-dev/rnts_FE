import { ChangeEvent } from 'react';
import './input.scss';

interface PrimaryInputProps {
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, onChange }: PrimaryInputProps) => {
  return <input className="primary_input" type="text" value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
