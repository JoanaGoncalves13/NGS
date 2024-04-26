import React from "react";
import styles from "../../../page.module.css"; // Make sure the path to your CSS file is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search, setSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar..."
        className={styles.searchInput}
      />
      <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
    </div>
  );
};

export default Search;
