import { FC } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button type="submit" {...props} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
