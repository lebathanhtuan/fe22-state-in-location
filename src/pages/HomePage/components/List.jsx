import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import Item from "./Item";

function List({ productList, setProductList }) {
  const [productName, setProductName] = useState("");
  const [isNew, setIsNew] = useState(false);

  function handleChangeName(e) {
    setProductName(e.target.value);
  }

  function handleChangeIsNew(e) {
    setIsNew(e.target.checked);
  }

  function handleAddProduct() {
    const newProduct = {
      id: 5,
      name: productName,
      isNew: isNew,
    };
    const newProductList = [...productList, newProduct];
    setProductList(newProductList);
  }

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
      {productList.length < 5 && (
        <Card>
          <Card.Body>
            <Form.Control
              type="productName"
              placeholder="Enter name"
              onChange={(e) => handleChangeName(e)}
              value={productName}
            />
            <Form.Check
              type="checkbox"
              label="is New"
              onChange={(e) => handleChangeIsNew(e)}
              checked={isNew}
            />
            <Button
              variant="outline-primary"
              onClick={() => handleAddProduct()}
            >
              Thêm Product
            </Button>
            <Button onClick={() => setIsNew(!isNew)}>
              Thay đổi checked
            </Button>
            <Button onClick={() => setProductName("Tuấn")}>
              Thay đổi input
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default List;
