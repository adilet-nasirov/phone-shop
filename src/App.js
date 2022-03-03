import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const API = "https://breakingbadapi.com/api/characters";
  const [actors, setActor] = useState([]);
  const fetchData = async () => {
    const responce = await fetch(API);
    const data = await responce.json();
    setActor(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {actors.map((item) => {
        return (
          <div className="actor">
            <h2>{item.category}</h2>
            <img src={item.img} alt="" width={300} height={350} />
            <h1>{item.name}</h1>
            <p>Nickname:{item.nickname}</p>
            <p>{item.birthday}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
