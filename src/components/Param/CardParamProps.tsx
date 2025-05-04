import { FC } from "react";

import { CardParamProps } from "./CardParamProps.props";

import styles from "./CardParamProps.module.css";

const CardParam: FC<CardParamProps> = ({ title, text }) => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default CardParam;
