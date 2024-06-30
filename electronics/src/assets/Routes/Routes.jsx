import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Products from "../components/Products/Products";


export const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
  },
  {
    path: "products/:id",
    element: <Products/>,
  },
]);
