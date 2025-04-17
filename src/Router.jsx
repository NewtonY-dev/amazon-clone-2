import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing/Landing";
import Auth from "../src/Pages/Auth/Auth";
import Orders from "../src/Pages/Orders/Orders";
import Payment from "../src/Pages/Payment/Payment";
import Cart from "../src/Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "../src/Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51RE2D1DB0ZyL5D50a3JeYrF0GLdy51KBfNe8KuBfXAOwdf4TrcXsfBQJ0U021aRdPsTTZoblxKRrw5PitR7wTH0C00dZjVP4nY"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
