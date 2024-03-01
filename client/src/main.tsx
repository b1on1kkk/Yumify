import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Header from "./components/Header/Header.tsx";
import Login from "./components/Login/Login.tsx";
import Sign from "./components/Sign/Sign.tsx";
import Guard from "./components/Guard/Guard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Guard
        render_after_loading={<App />}
        render_on_loading={<div>loading</div>}
      />
    ),
    children: [
      {
        path: "/",
        element: <Header />
      },
      {
        path: "/login",
        element: (
          <Guard
            render_after_loading={<Login />}
            render_on_loading={<div>loading</div>}
          />
        )
      },
      {
        path: "/sign",
        element: (
          <Guard
            render_after_loading={<Sign />}
            render_on_loading={<div>loading</div>}
          />
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
