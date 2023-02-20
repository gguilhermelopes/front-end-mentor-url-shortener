import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
}

const Button: FunctionComponent<ButtonProps> = ({ content }) => {
  return <button className={styles.button}>{content}</button>;
};

export default Button;
