import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSort} from "../redux/slices/filterSlice";

function Sort({ value, changeSort, changeOrder, order }) {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  console.log("sort state## ", sort);

  const [popupActive, setPopupActive] = React.useState(false);
  const [colorSvg, setColorSvg] = React.useState("#2C2C2C");
  const listPopup = [
    { name: "популярности", sort: "raiting" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];

  const onClickListItems = (obj) => {
    dispatch(setSort(obj))
    changeSort(obj);
    setPopupActive(!popupActive);
  };

  const onClickSortOrder = () => {
    const item =
      order === "desc"
        ? (setColorSvg("#2C2C2C"), "asc")
        : (setColorSvg("#fe5f1e"), "desc");
    changeOrder(item);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={order === "asc" ? "rotateArrow" : ""}
          width="20"
          height="20"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClickSortOrder}
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill={colorSvg}
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopupActive(!popupActive)}>{sort.name}</span>
      </div>
      {popupActive && (
        <div className="sort__popup">
          <ul>
            {listPopup.map((popup, index) => (
              <li
                key={index}
                onClick={() => onClickListItems(popup)}
                className={sort.sort === popup.sort ? "active" : ""}
              >
                {popup.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
