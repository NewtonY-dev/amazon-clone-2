import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing/Landing";
import SignUp from "../src/Pages/Auth/SignUp";
import Orders from "../src/Pages/Orders/Orders";
import Payment from "../src/Pages/Payment/Payment";
import Cart from "../src/Pages/Cart/Cart";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
