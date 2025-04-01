import styles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button type="submit" onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
