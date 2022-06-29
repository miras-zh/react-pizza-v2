import React from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext("");

function App() {
  const [search, setSearch] = React.useState("");
  console.log("search>", search);
  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{search, setSearch}}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home search={search} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
