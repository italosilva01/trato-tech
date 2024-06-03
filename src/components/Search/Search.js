import { changeSearch, resetSearch } from "store/reducers/search";
import styles from "./Search.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetSearch());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={search}
        onChange={(event) => {
          console.log(event.target.value);
          dispatch(changeSearch(event.target.value));
        }}
      />
    </div>
  );
}
