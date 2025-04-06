import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../components/API/endpoint";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <LayOut>{<ProductCard product={product} />}</LayOut>;
}

export default ProductDetail;
