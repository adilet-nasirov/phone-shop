import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const API = "https://breakingbadapi.com/api/characters";
  const [actors, setActors] = useState([]);
  const fetchData = () => {
    axios
      .get(API)
      .then((responce) => {
        setActors(responce.data);
      })
      .catch(console.error());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {actors.map((item) => {
        return (
          <div className="actor" key={item.char_id}>
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
