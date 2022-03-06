import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemInfo = () => {
  //   useEffect(() => {
  //     console.log(match);
  //     console.log(window.location);
  //   }, []);
  const { id } = useParams();
  console.log(id);
  return (
    <div style={{ marginTop: "4rem", textAlign: "center" }}>
      <h1>Item info</h1>
    </div>
  );
};

export default ItemInfo;
