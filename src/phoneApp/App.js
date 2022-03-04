import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Phones from "./phones";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
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
    <div className="App">
      <Navbar />
      <Phones increase={increaseNum} decrease={decreaseNum} data={phoneData} />

      <div>
        <h1>total: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
