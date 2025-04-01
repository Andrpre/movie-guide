import styles from "./InputText.module.css";
import cn from "classnames";

const Search = ({ placeholder, isSearch, ref }) => {
  return (
    <input
      ref={ref}
      className={cn(styles.search, {
        [styles.withIcon]: isSearch,
      })}
      placeholder={placeholder}
      required
    />
  );
};

export default Search;
