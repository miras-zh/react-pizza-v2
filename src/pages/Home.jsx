import React from "react";
import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoad, setLoad] = React.useState(false);
  React.useEffect(() => {
    fetch("https://62b0a7a6e460b79df04ab646.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoad(true);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {!isLoad
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <CardPizza key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
