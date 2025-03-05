import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import Footer from "./components/Footer/footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SingleProducts from "./components/SingleProducts/SingleProducts";
import Header2 from "./components/Header/Header2";
import Footer2 from "./components/Footer/Footer2";
import AppContext from "./utils/context";

function App() {
  return (
    <>
      <Router>
        <AppContext>
          <Header2 />
          {/* <SingleProducts/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <NewsLetter />
          <Footer2 />
        </AppContext>
      </Router>
    </>
  );
}

export default App;
