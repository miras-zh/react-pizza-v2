import React from "react";
import style from "./search.module.scss";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice"
import debounce from "lodash.debounce";

function Search() {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] =React.useState();
  const inputRef = React.useRef();


  const onClickFoucesClear = () => {
    dispatch(setSearchValue(""));
    setValueInput("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValueInput(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        type="text"
        value={valueInput}
        onChange={(event) => onChangeInput(event)}
        className={style.search}
        placeholder="Поиск пиццы"
      />

      {valueInput && (
        <svg
          className={style.clearIcon}
          onClick={onClickFoucesClear}
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
