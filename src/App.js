import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Home/Login/Login/Login";
import SignUp from "./Pages/Home/Login/SignUp/SignUp";
import CheckOut from "./Pages/Home/CheckOut/CheckOut";
import Blogs from "./Pages/Home/Blogs/Blogs";
import RequireAuth from "./Pages/Home/Login/RequirAuth/RequirAuth";
import Galaray from "./Pages/Home/Galary/Galaray";
import Booking from "./Pages/Home/Booking/Booking";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route
          path='/:serviceId'
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/galary' element={<Galaray></Galaray>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* repo private to public */}
    </div>
  );
}

export default App;
