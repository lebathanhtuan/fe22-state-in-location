import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";
import List from "./components/List";

import * as S from "./styles";

function HomePage({ name }) {
  const [count, setCount] = useState(0);
  const [isShowProduct, setIsShowProduct] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Product 1",
      isNew: false,
    },
    {
      id: 2,
      name: "Product 2",
      isNew: true,
    },
    {
      id: 3,
      name: "Product 3",
      isNew: false,
    },
    {
      id: 4,
      name: "Product 4",
      isNew: false,
    },
  ]);

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
          <Button
            onClick={() => setIsShowProduct(!isShowProduct)}
          >
            {isShowProduct ? "Ẩn" : "Hiện"} Product
          </Button>
          {isShowProduct && (
            <List
              productList={productList}
              setProductList={setProductList}
            />
          )}
          <h3>{count}</h3>
          <Button onClick={() => setCount(count + 1)}>
            Tăng
          </Button>
        </S.ContentWrapper>
      </S.MainWrapper>
      <Footer />
    </>
  );
}

export default HomePage;
