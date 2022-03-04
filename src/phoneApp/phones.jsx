import React from "react";

const Phones = ({ increase, decrease, item, data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <hr />
            <div className="phone">
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
      })}
    </div>
  );
};

export default Phones;
