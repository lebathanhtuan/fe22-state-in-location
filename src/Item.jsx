import React from "react";

function Item({ productName, isNew }) {
  return (
    <div style={{ color: isNew ? "red" : "black" }}>
      {productName}
    </div>
  );
}

export default Item;
