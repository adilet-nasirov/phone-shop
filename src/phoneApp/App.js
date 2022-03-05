import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Phones from "./phones";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import ItemInfo from "./ItemInfo";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones/:id" element={<ItemInfo />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
