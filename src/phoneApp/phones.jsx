import React from "react";

const Phones = ({ increase, decrease, item }) => {
  return (
    <div>
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
    </div>
  );
};

export default Phones;
