import React from "react";

import { useDispatch } from "react-redux";

import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import PizzaPage from "./pages/PizzaPage";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<PizzaPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
