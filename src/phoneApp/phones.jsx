import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Phones = () => {
  const [fortniteData, setData] = useState([]);
  const fetchData = async () => {
    const req = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await req.json();
    setData(items.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(fortniteData);
  return (
    <center>
      <h1 style={{ marginTop: "4.5rem" }}>Fortnite Shop</h1>
      <div>
        {fortniteData.map((item) => {
          return (
            <div key={item.itemId}>
              <Link to={`/phones/${item.itemId}`}>
                <h3>{item.item.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </center>
  );
};

export default Phones;
