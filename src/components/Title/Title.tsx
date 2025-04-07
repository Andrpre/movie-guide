import { FC } from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.props";

const Title: FC<TitleProps> = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
