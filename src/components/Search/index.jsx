import React from "react";
import style from "./search.module.scss";

function Search({ search, setSearch }) {
  return (
    <div className={style.root}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={style.search}
        placeholder="Поиск пиццы"
      />

      {search && (
        <svg
          className={style.clearIcon}
          onClick={()=>setSearch('')}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 0 48 48"
          width="48"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
}

export default Search;