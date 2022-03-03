import "./App.css";
import { data } from "./data";
function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}

export default App;
