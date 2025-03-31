import styles from "./InputText.module.css";

const Search = ({ placeholder, isSearch }) => {
  return (
    <input
      className={`${styles.search} ${isSearch ? styles.withIcon : ""}`}
      placeholder={placeholder}
    />
  );
};

export default Search;
