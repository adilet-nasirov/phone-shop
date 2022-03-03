import "./App.css";
import { data } from "./data";
function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div className="phone">
            <div className="phoneImg">
              <img src={item.image} alt="" />
            </div>
            <div className="phoneInfo">
              <h1>{item.name}</h1>
              <h3>${item.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
