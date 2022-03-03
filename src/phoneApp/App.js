import { useState } from "react";
import "./App.css";
import { data } from "./data";
function App() {
  const [phoneData, setData] = useState(data);
  const [total, setTotal] = useState(0);
  const increase = (id) => {
    const phone = phoneData.filter((item) => item.id === id);
    phone[0].count = phone[0].count + 1;
    setData([...phoneData], phone);
    let tot = 0;
    for (let el of phoneData) {
      tot += el.price * el.count;
    }
    setTotal(tot);
  };
  const decrease = (id) => {
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
      {phoneData.map((item) => {
        return (
          <>
            <hr />
            <div key={item.id} className="phone">
              <div className="phoneImg">
                <img src={item.image} alt="" />
              </div>
              <div className="phoneInfo">
                <h1>{item.name}</h1>
                <h3>${item.price}</h3>
                <div className="adder">
                  <p className="plus" onClick={() => increase(item.id)}>
                    +
                  </p>
                  <p>{item.count}</p>
                  <p className="minus" onClick={() => decrease(item.id)}>
                    -
                  </p>
                </div>
              </div>
              <div>
                <h1>${item.count * item.price}</h1>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <h1>total: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
