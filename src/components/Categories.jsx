import React from "react";

function Categories() {
  const [activeCat, setActiveCat] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const setActiveClass = (index) => {
    setActiveCat(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(
          (value, index) => (<li
          key={index}
          onClick={() => setActiveClass(index)}
          className={activeCat === index ? "active" : ""}
        >
          {value}
        </li>)
        )}
      </ul>
    </div>
  );
}

export default Categories;
