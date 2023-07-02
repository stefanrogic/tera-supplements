import "./App.scss";

import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";

import { ToastContainer } from "react-toastify";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";

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
        <Route path="/product/:id" element={<ProductPage />}></Route>
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
