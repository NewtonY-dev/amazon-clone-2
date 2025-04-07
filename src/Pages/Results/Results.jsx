import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  const categoryMap = {
    "women's clothing": "women's clothing",
    "men's clothing": "men's clothing",
    electronics: "electronics",
    jewelry: "jewelery", // Correct spelling for the API
  };

  useEffect(() => {
    setIsLoading(true);
    const apiCategoryName = categoryMap[categoryName] || categoryName;
    axios
      .get(`https://fakestoreapi.com/products/category/${apiCategoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
