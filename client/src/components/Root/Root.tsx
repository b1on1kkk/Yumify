import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MyGlobalContext } from "../../context/globalContext";

import Guard from "../Guard/Guard";
import Login from "../Registration/Login/Login";
import Sign from "../Registration/Sign/Sign";
import Product from "../DetailedProduct/Product/Product";
import Cart from "../Cart/Cart/Cart";
import Products from "../Products/Products/Products";
import ProductsByType from "../ProductsByType/ProductsByType/ProductsByType";
import App from "../../App";
import Main from "../WelcomePage/Main/Main";
import Loading from "../Loading/Loading";

import type { TBasketProduct } from "../interfaces/interfaces";
import type { TAxiosResponse } from "../Guard/interfaces/interfaces";

export default function Root() {
  const [basket, setBasket] = useState<TBasketProduct[]>([]);
  const [user, setUser] = useState<TAxiosResponse | null>(null);

  return (
    <MyGlobalContext.Provider value={{ basket, user, setBasket, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
            children={[
              <Route
                key={"/"}
                path="/"
                element={
                  <Guard
                    render_after_loading={<Main />}
                    render_on_loading={<Loading />}
                    redirect_path="/login"
                  />
                }
              />,
              <Route
                key={"/products/:product_type"}
                path="/products/:product_type"
                element={
                  <Guard
                    render_after_loading={<ProductsByType />}
                    render_on_loading={<Loading />}
                    redirect_path="/login"
                  />
                }
              />,
              <Route
                key={"/products"}
                path="/products"
                element={
                  <Guard
                    render_after_loading={<Products />}
                    render_on_loading={<Loading />}
                    redirect_path="/login"
                  />
                }
              />,
              <Route
                key={"/purchase_history"}
                path="/purchase_history"
                element={<div>purchase_history</div>}
              />,
              <Route
                key={"/notifications"}
                path="/notifications"
                element={<div>notifications</div>}
              />,
              <Route key={"/user"} path="/user" element={<div>user</div>} />
            ]}
          />
          <Route
            path="/cart"
            element={
              <Guard
                render_after_loading={<Cart />}
                render_on_loading={<Loading />}
                redirect_path="/login"
              />
            }
          />
          <Route
            path="/products/:product_type/:product_id"
            element={
              <Guard
                render_after_loading={<Product />}
                render_on_loading={<Loading />}
                redirect_path="/login"
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </MyGlobalContext.Provider>
  );
}
