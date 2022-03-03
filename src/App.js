import { useState, useEffect } from "react";
function App() {
  const API = "https://breakingbadapi.com/api/characters";
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    //need to fech data
    try {
      const req = await fetch(API);
      const data = await req.json();
      setActors(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      {actors.map((item) => {
        return (
          <div className="actor">
            <img src={item.img} alt="" width={200} />
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
