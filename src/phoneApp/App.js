import { useState } from "react";
import "./App.css";
import { data } from "./data";
function App() {
  const [phoneData, setData] = useState(data);
  const add = (id) => {
    const phone = phoneData.filter((item) => item.id === id);

    setData([...phoneData, phone[0].count + 1]);
    console.log(phoneData);
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
                  <p className="plus" onClick={() => add(item.id)}>
                    +
                  </p>
                  <p>{item.count}</p>
                  <p className="minus">-</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div>
        <h1>total: </h1>
      </div>
    </div>
  );
}

export default App;
