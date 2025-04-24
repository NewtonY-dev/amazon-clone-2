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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51RE2gy0636i00ZvyxClhUDbNBuWaZulaMKIw9glHJ1Cr6kxSn4QAszvXXb94vEVya7GijKaBv6QnLnBna8s9yoCC00CBac4u0q"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must login to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
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
