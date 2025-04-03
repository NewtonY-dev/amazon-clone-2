import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/CarouselEffect";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;
