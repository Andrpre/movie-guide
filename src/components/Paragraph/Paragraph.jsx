import styles from "./Paragraph.module.css";

const Paragraph = ({ size = 16, text }) => {
  return (
    <p className={styles.paragraph} style={{ fontSize: `${size}px` }}>
      {text}
    </p>
  );
};

export default Paragraph;
