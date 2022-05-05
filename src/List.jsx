import React from "react";
import { Button } from "react-bootstrap";

import Item from "./Item";

function List({ productList }) {
  function renderProductList() {
    return productList.map((item, index) => {
      // if (index > 2) return null;
      return (
        <Item
          key={item.id}
          productName={item.name}
          isNew={item.isNew}
        />
      );
    });
  }

  return (
    <div>
      {renderProductList()}
      <Button variant="outline-primary">ABC</Button>
      <Button variant="primary">XYZ</Button>
    </div>
  );
}

export default List;
