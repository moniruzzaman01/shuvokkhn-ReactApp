import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbaar from "./components/navbar/Navbaar";
import { Routes, Route } from "react-router-dom";
import BlankPage from "./components/404page/BlankPage";
import CheckOut from "./components/check-out/CheckOut";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import RequireAuth from "./components/require-auth/RequireAuth";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<BlankPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
