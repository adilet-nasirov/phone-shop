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
  const [phoneData, setData] = useState(data);
  const [total, setTotal] = useState(0);
  const increaseNum = (id) => {
    const phone = phoneData.filter((item) => item.id === id);
    phone[0].count = phone[0].count + 1;
    setData([...phoneData], phone);
    let tot = 0;
    for (let el of phoneData) {
      tot += el.price * el.count;
    }
    setTotal(tot);
  };
  const decreaseNum = (id) => {
    const phone = phoneData.filter((item) => item.id === id);
    if (phone[0].count) {
      phone[0].count = phone[0].count - 1;
    }
    setData([...phoneData], phone);
    let tot = phoneData.reduce((acc, i) => {
      return acc + i.count * i.price;
    }, 0);
    setTotal(tot);
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/about" element={<About />} />
          <Route path="/phones/:id" element={<ItemInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
