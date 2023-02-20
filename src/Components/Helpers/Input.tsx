import { FunctionComponent } from "react";

interface InputProps {
  id: string;
  label?: string;
  value: string;
  type: string;
  error?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        className={error && "error"}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </label>
  );
};

export default Input;
