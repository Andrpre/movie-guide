import { FC } from "react";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";

const Paragraph: FC<ParagraphProps> = ({ size = 16, children, ...props }) => {
  return (
    <p className={styles.paragraph} style={{ fontSize: `${size}px` }} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
