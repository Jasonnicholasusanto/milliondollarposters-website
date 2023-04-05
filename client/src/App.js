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
import Footer2 from "./components/Footer2/Footer2";
import "./app.scss";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import SignUp from "./pages/Login/Signup";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/Checkout";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import FAQ from "./pages/FAQ/FAQ";
import FAQs from "./pages/FAQs/FAQs";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import LaunchingSoon from "./pages/LaunchingSoon/LaunchingSoon";

// Customizing the layout of the web page: Navigation bar and Footer stays the same
// in all pages. However, we utilize Outlet from react-router-dom to change the web pages'
// properties and objects.
const Layout = () => {
  return (
    <div className="app">
      {/* <LaunchingSoon/> */}
      <NavBar/>
      <Outlet/>
      <Footer2/>
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
      // The About Us page route
      {
        path:"/about-us/",
        element:<AboutUs/>,
      },
      // The Contact Us page route
      {
        path:"/contact-us/",
        element:<ContactUs/>,
      },
      // The FAQs page route
      {
        path:"/frequently-asked-questions/",
        element:<FAQs/>,
      },
      // Products page route
      {
        // path:"/products/:id",
        path:"/posters/:id",
        element:<Products/>,
      },
      // Product page route
      {
        path:"/poster/:id",
        element:<Product/>,
      },
      {
        path:"/cart/",
        element:<ShoppingBag/>,
      },
      {
        path:"/sign-in/",
        element:<Login/>,
      },
      {
        path:"/sign-up/",
        element:<SignUp/>,
      },
      {
        path:"/cart/checkout/",
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
