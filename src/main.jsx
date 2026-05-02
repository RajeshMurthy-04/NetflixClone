import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./components/approuter";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

createRoot(document.getElementById("root")).render(
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
);
