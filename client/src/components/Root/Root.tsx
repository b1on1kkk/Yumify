import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Guard
            render_after_loading={<Main />}
            render_on_loading={<Loading />}
          />
        )
      },
      {
        path: "/products/:product_type",
        element: (
          <Guard
            render_after_loading={<ProductsByType />}
            render_on_loading={<Loading />}
          />
        )
      },
      {
        path: "/products",
        element: (
          <Guard
            render_after_loading={<Products />}
            render_on_loading={<Loading />}
          />
        )
      },
      {
        path: "/purchase_history",
        element: <div>purchase_history</div>
      },
      {
        path: "/notifications",
        element: <div>notifications</div>
      },
      {
        path: "/user",
        element: <div>user</div>
      }
    ]
  },
  {
    path: "/cart",
    element: (
      <Guard render_after_loading={<Cart />} render_on_loading={<Loading />} />
    )
  },
  {
    path: "/products/:product_type/:product_id",
    element: (
      <Guard
        render_after_loading={<Product />}
        render_on_loading={<Loading />}
      />
    )
  },
  {
    path: "/login",
    element: (
      <Guard render_after_loading={<Login />} render_on_loading={<Loading />} />
    )
  },
  {
    path: "/sign",
    element: (
      <Guard render_after_loading={<Sign />} render_on_loading={<Loading />} />
    )
  }
]);

export default function Root() {
  const [basket, setBasket] = useState<TBasketProduct[]>([]);

  return (
    <MyGlobalContext.Provider value={{ basket, setBasket }}>
      <RouterProvider router={router} />
    </MyGlobalContext.Provider>
  );
}
