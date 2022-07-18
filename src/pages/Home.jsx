import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import axios from "axios";
import qs from "qs";

function Home({ search }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortType);
  const order = useSelector((state) => state.filter.sortOrder);
  const currentPage = useSelector((state) => state.filter.currentPage);


  let [items, setItems] = React.useState([]);
  let [isLoad, setLoad] = React.useState(false);

  const changeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  // const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));
      console.log('params>', params)
    }
    dispatch(setFilters(params))
  },[])

  React.useEffect(() => {
    let url = `${categoryId > 0 ? "category=" + categoryId : ""}`;
    let searchParam = `${search.length !== 0 ? "&search=" + search : ""}`;

    url = url + `&sortBy=${sortType}&order=${order}`;
    url = searchParam !== "" ? url + searchParam : url;
    // console.log('url>', url)
    // fetch(
    //   `https://62b0a7a6e460b79df04ab646.mockapi.io/items?limit=4&page=${currentPage}&` +url
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //     setLoad(true);
    //   });
      axios.get(`https://62b0a7a6e460b79df04ab646.mockapi.io/items?limit=4&page=${currentPage}&` +url)
            .then(response=>{
              // console.log('@ #$#response axios ##', response);
              setItems(response.data);
              setLoad(true);
            })
    window.scrollTo(0, 0);
  }, [categoryId, sortType, order, search, currentPage]);

  React.useEffect(()=>{
    const queryString = qs.stringify({
      sortType: sortType,
      categoryId,
      currentPage
    })
    console.log("queryString >", queryString);
    navigate(`?${queryString}`)
  },[categoryId, sortType, order, search, currentPage])

  const pizzasList = items.map((obj) => <CardPizza key={obj.id} {...obj} />);

  const onChangePage = (page)=>{
    // (page) => setCurrentPage(page);
    dispatch(setCurrentPage(page))
  }

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
        <Pagination currentPage={currentPage} onPageChange={onChangePage} />
      </div>
    </>
  );
}

export default Home;
