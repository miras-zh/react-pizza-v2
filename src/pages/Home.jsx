import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters, setSearchValue } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

import Skeleton from "../components/CardPizza/Skeleton";
import CardPizza from "../components/CardPizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { listPopup} from '../components/Sort';
import Pagination from "../components/Pagination";
import axios from "axios";
import qs from "qs";
import { getAllPizzas } from "../redux/slices/pizzaSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state)=>state.filter.searchValue);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortType);
  const order = useSelector((state) => state.filter.sortOrder);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const {items, isStatus} = useSelector((state)=>state.pizza)

  let [isLoad, setLoad] = React.useState(false);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  React.useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));
      const sort = listPopup.find((popup)=>popup.sortType == params.sortType);

      dispatch(setFilters({...params, sort}));
      isSearch.current = true;
      fetchDataRoute();
    }
  },[])

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if(!isSearch.current){
      fetchDataRoute();
    }
    isSearch.current = false;
  }, [categoryId, sortType, order, search, currentPage]);

  React.useEffect(()=>{
   if(isMounted.current){
    const queryString = qs.stringify({
      sortType: sortType,
      categoryId,
      currentPage
    })
    navigate(`?${queryString}`)
   }
   isMounted.current = true;
  },[categoryId, sortType, currentPage])
  
  const changeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const fetchDataRoute = ()=>{
    dispatch(getAllPizzas({categoryId, search,sortType,order,currentPage}));
  }

  const onChangePage = (page)=>{
    dispatch(setCurrentPage(page))
  }

  const pizzasList = items.map((obj) => <CardPizza key={obj.id} {...obj} />);
  const skeletonList = [...new Array(6)].map((_, index) => (<Skeleton key={index} />));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} changeCategory={changeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        { isStatus === 'error' ? (
          <div className="content__error">
              <h2>Нет товаров на витрине</h2>
              <p>Сбой загрузки товаров ...</p>
          </div>
        ):(
            <div className="content__items">
              {isStatus === 'loading'
                  ? skeletonList
                  : pizzasList}
            </div>
        )
        }
        <Pagination currentPage={currentPage} onPageChange={onChangePage} />
      </div>
    </>
  );
}

export default Home;












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