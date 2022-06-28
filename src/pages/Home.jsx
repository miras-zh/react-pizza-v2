import React from "react";
import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

function Home({search}) {
  let [items, setItems] = React.useState([]);
  let [isLoad, setLoad] = React.useState(false);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
      name: "популярности",
      sort: "raiting",
    });
  const [sortOrder, setSortOrder] = React.useState('desc');

  React.useEffect(() => {
    let url = `${categoryId > 0 ? "category=" + categoryId : ""}`;
    url = url + `&sortBy=${sortType.sort}&order=${sortOrder}`
    console.log(url)
    fetch("https://62b0a7a6e460b79df04ab646.mockapi.io/items?" + url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoad(true);
      });
    window.scrollTo(0, 0);
  }, [categoryId,sortType, sortOrder]);

  const pizzasList = items
  .filter((obj)=>{
    if(obj.title.toLowerCase().includes(search.toLowerCase())){
      return true
    }
    return false
  })
  .map((obj) => <CardPizza key={obj.id} {...obj}/>)
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            changeCategory={(id) => setCategoryId(id)}
          />
          <Sort value={sortType} 
          changeSort={(id) => setSortType(id)} 
          order={sortOrder}
          changeOrder={(val)=>setSortOrder(val)}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {!isLoad
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzasList }
        </div>
      </div>
    </>
  );
}

export default Home;
