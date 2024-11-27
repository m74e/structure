import SearchIcon from "../../../CustomIcons/SearchIcon";
import styles from "./searchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
      <SearchIcon />
      <input placeholder="Search" />
    </div>
  );
};

export default SearchInput;
