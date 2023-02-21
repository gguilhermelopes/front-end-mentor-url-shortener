import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  content,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
