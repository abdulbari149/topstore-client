import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Product, Auth, Cart, Checkout, Order } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};
