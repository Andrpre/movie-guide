import { FC } from "react";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

import { EmptyProps } from "./Empty.Props";
import styles from "./Empty.module.css";

const Empty: FC<EmptyProps> = ({ title, text }) => {
  return (
    <div className={styles.layout}>
      <Title text={title} />
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default Empty;
