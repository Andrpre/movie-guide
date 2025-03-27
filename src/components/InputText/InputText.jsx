import styles from "./InputText.module.css";
import cn from "classnames";

const Search = ({ placeholder, isSearch }) => {
  return (
    <input
      className={cn(styles.search, {
        [styles.withIcon]: isSearch,
      })}
      placeholder={placeholder}
    />
  );
};

export default Search;
