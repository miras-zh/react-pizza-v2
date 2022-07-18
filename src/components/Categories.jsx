import React from "react";
import { useSelector } from "react-redux";

function Categories({value, changeCategory}) {
  const activeCatergory = useSelector((state)=>state.filter.categoryId);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const setActiveClass = (index) => {
    changeCategory(index)
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(
          (value, index) => (
          <li
          key={index}
          onClick={() => setActiveClass(index)}
          className={activeCatergory === index ? "active" : ""}>
            {value}
          </li>)
        )}
      </ul>
    </div>
  );
}

export default Categories;
