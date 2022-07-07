import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice"; 

import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";

function Home({ search }) {

  const categoryId = useSelector(state=>state.filter.categoryId);
  const dispatch = useDispatch();

  console.log('categorId>', categoryId)


  let [items, setItems] = React.useState([]);
  let [isLoad, setLoad] = React.useState(false);

  // const [categoryId, setCategoryId] = React.useState(0);

  const changeCategory = (id)=>{
    console.log('id>',id);
    dispatch(setCategoryId(id))
  }

  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "raiting",
  });
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    let url = `${categoryId > 0 ? "category=" + categoryId : ""}`;
    let searchParam = `${search.length !== 0 ? "&search=" + search : ""}`;

    url = url + `&sortBy=${sortType.sort}&order=${sortOrder}`;
    url = searchParam !== "" ? url + searchParam : url;

    console.log(url);
    fetch(`https://62b0a7a6e460b79df04ab646.mockapi.io/items?limit=4&page=${currentPage}&` + url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoad(true);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortOrder, search, currentPage]);

  //-- search here without request
  const pizzasList = items
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(search.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => <CardPizza key={obj.id} {...obj} />);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            changeCategory={changeCategory}
          />
          <Sort
            value={sortType}
            changeSort={(id) => setSortType(id)}
            order={sortOrder}
            changeOrder={(val) => setSortOrder(val)}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {!isLoad
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzasList}
        </div>
        <Pagination onPageChange={(page)=>setCurrentPage(page)} />
      </div>
    </>
  );
}

export default Home;
