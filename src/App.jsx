import "./App.scss";

import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import ProductPage from "./pages/productPage/ProductPage";
import Product from "./pages/products/Products";

import { ToastContainer } from "react-toastify";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";

function App() {
  const Root = () => (
    <>
      <ToastContainer style={{ marginTop: "100px" }} />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/product/:id" element={<ProductPage />}></Route> */}
        <Route path="/products/categories" element={<Product />}></Route>
        <Route path="/products/categories/:id" element={<Product />}></Route>
        <Route path="/products/categories/:id/:id" element={<ProductPage />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
