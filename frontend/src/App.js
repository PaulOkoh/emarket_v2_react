import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <a href="/">devmarket</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
