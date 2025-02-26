import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;