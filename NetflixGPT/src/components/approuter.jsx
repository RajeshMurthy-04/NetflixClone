import App from "../App";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

export default appRouter;
