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
import MainLayout from "./layouts/MainLayout";

function App() {
    const dispatch = useDispatch();

       return (
           <Routes>
               <Route path="/" element={<MainLayout/>}>
                   <Route path="" element={<Home />} />
                   <Route path="cart" element={<Cart />} />
                   <Route path="pizza/:id" element={<PizzaPage />} />
                   <Route path="*" element={<NotFound />} />
               </Route>
           </Routes>
      );
}

export default App;
