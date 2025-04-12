import { FC } from "react";
import styles from "./InputText.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search: FC<SearchProps> = ({ placeholder, isSearch, ref, ...props }) => {
  return (
    <input
      {...props}
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
