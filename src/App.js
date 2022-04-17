import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbaar from "./components/navbar/Navbaar";
import { Routes, Route } from "react-router-dom";
import BlankPage from "./components/404page/BlankPage";

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<BlankPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
