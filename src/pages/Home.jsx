import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";

function Home({ search }) {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const sortOrder = useSelector((state) => state.filter.sortOrder);


  let [items, setItems] = React.useState([]);
  let [isLoad, setLoad] = React.useState(false);

  const changeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    let url = `${categoryId > 0 ? "category=" + categoryId : ""}`;
    let searchParam = `${search.length !== 0 ? "&search=" + search : ""}`;

    url = url + `&sortBy=${sortType}&order=${sortOrder}`;
    url = searchParam !== "" ? url + searchParam : url;

    fetch(
      `https://62b0a7a6e460b79df04ab646.mockapi.io/items?limit=4&page=${currentPage}&` +url
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoad(true);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortOrder, search, currentPage]);

  const pizzasList = items.map((obj) => <CardPizza key={obj.id} {...obj} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} changeCategory={changeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {!isLoad
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzasList}
        </div>
        <Pagination onPageChange={(page) => setCurrentPage(page)} />
      </div>
    </>
  );
}

export default Home;
