import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";

import * as S from "./styles";

const initialValues = {
  productName: "",
  description: "",
  price: 0,
  brand: "",
  option: [],
  color: "",
  isNew: false,
};

function HomePage({ name }) {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [productList, setProductList] = useState([]);
  const [productForm, setProductForm] =
    useState(initialValues);
  const [editId, setEditId] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    const newProductForm = {
      ...productForm,
      [name]: name === "price" ? parseInt(value) : value,
    };
    setProductForm(newProductForm);
  }

  function handleChangeIsNew(e) {
    const newProductForm = {
      ...productForm,
      isNew: e.target.checked,
    };
    setProductForm(newProductForm);
  }

  function handleChangeOption(e) {
    const { value, checked } = e.target;
    let newOption = [];

    if (checked) {
      newOption = [...productForm.option, value];
    } else {
      newOption = productForm.option.filter(
        (item) => item !== value
      );
    }
    const newProductForm = {
      ...productForm,
      option: newOption,
    };
    setProductForm(newProductForm);
  }

  function handleAddProduct() {
    const newProduct = {
      id: uuidv4(),
      ...productForm,
    };
    const newProductList = [...productList, newProduct];
    setProductList(newProductList);
    setProductForm(initialValues);
  }

  function handleEditProduct() {
    const newProductList = [...productList];
    const newProduct = {
      id: editId,
      ...productForm,
    };
    const productIndex = productList.findIndex(
      (item) => item.id === editId
    );
    newProductList.splice(productIndex, 1, newProduct);
    setProductList(newProductList);
    setProductForm(initialValues);
    setEditId("");
  }

  function handleCancelEdit() {
    setProductForm(initialValues);
    setEditId("");
  }

  function handleConfirmEdit(id) {
    const product = productList.find(
      (item) => item.id === id
    );
    const newProduct = { ...product };
    delete newProduct.id;
    setProductForm(product);
    setEditId(id);
  }

  function handleDeleteProduct(id) {
    const newProductList = productList.filter(
      (item) => item.id !== id
    );
    setProductList(newProductList);
  }

  function renderProductList() {
    return productList.map((item, index) => {
      return (
        <Card key={`${item.id}-${index}`}>
          <Card.Body>
            <Card.Title>
              Product name: {item.productName}
            </Card.Title>
            <Card.Text>
              Description: {item.description}
            </Card.Text>
            <Card.Text>
              Price: {item.price.toLocaleString()} VND
            </Card.Text>
            <Card.Text>Brand: {item.brand}</Card.Text>
            <Card.Text>Color: {item.color}</Card.Text>
            <Card.Text>
              Status:
              {item.isNew ? "New" : "Old"}
            </Card.Text>
            <Card.Text>
              Option: {item.option.join(", ")}
            </Card.Text>
            <Button
              style={{ marginRight: 16 }}
              onClick={() => handleConfirmEdit(item.id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDeleteProduct(item.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }

  return (
    <>
      <Header
        name={name}
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <S.MainWrapper>
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.ContentWrapper isShowSidebar={isShowSidebar}>
          <Card>
            <Card.Body>
              <h3>
                {editId
                  ? `Edit Product ${editId}`
                  : "Add Product"}
              </h3>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  onChange={(e) => handleChange(e)}
                  value={productForm.productName}
                  placeholder="Product name"
                />
                {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  onChange={(e) => handleChange(e)}
                  value={productForm.description}
                  placeholder="Product description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  onChange={(e) => handleChange(e)}
                  value={productForm.price}
                  placeholder="Product description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select
                  name="brand"
                  onChange={(e) => handleChange(e)}
                  value={productForm.brand}
                >
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="xiaomi">Xiaomi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Option</Form.Label>
                <Form.Check
                  name="option"
                  type="checkbox"
                  label="Option 1"
                  onChange={(e) => handleChangeOption(e)}
                  checked={productForm.option.includes("1")}
                  value="1"
                />
                <Form.Check
                  name="option"
                  type="checkbox"
                  label="Option 2"
                  onChange={(e) => handleChangeOption(e)}
                  checked={productForm.option.includes("2")}
                  value="2"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Check
                  name="color"
                  type="radio"
                  label="Black"
                  onChange={(e) => handleChange(e)}
                  checked={productForm.color === "black"}
                  value="black"
                />
                <Form.Check
                  name="color"
                  type="radio"
                  label="White"
                  onChange={(e) => handleChange(e)}
                  checked={productForm.color === "white"}
                  value="white"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  name="isNew"
                  type="checkbox"
                  label="Is new"
                  onChange={(e) => handleChangeIsNew(e)}
                  checked={productForm.isNew}
                />
              </Form.Group>
              {!!editId ? (
                <>
                  <Button
                    onClick={() => handleEditProduct()}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleCancelEdit()}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => handleAddProduct()}>
                  Add
                </Button>
              )}
            </Card.Body>
          </Card>
          {renderProductList()}
        </S.ContentWrapper>
      </S.MainWrapper>
      <Footer />
    </>
  );
}

export default HomePage;
