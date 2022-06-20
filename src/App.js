import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import CardPizza from "./components/CardPizza";
import pizzasList from "./assets/pizzas.json";

console.log("list>", pizzasList);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzasList.map((obj) => (
                <CardPizza key={obj.id} {...obj}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
