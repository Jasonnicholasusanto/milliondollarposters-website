import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import SignUp from "./pages/Login/Signup";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";

// Customizing the layout of the web page: Navigation bar and Footer stays the same
// in all pages. However, we utilize Outlet from react-router-dom to change the web pages'
// properties and objects.
const Layout = () => {
  return (
    <div className="app">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

// Creating the routes
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      // Home page route
      {
        path:"/",
        element:<Home/>,
      },
      // Products page route
      {
        // path:"/products/:id",
        path:"/posters/",
        element:<Products/>,
      },
      // Product page route
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/cart",
        element:<ShoppingBag/>,
      },
      {
        path:"/sign-in",
        element:<Login/>,
      },
      {
        path:"/sign-up",
        element:<SignUp/>,
      },
      {
        path:"/cart/checkout",
        element:<Checkout/>
      }
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
