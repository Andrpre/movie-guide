import { FC } from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.props";

const Title: FC<TitleProps> = ({ text, ...props }) => {
  return (
    <h1 className={styles.title} {...props}>
      {text}
    </h1>
  );
};

export default Title;
