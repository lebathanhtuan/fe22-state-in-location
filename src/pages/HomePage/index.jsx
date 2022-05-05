import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import List from "../../List";

import { CustomButton, Wrapper } from "./styles";

function HomePage({ name }) {
  const productList = [
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
  ];

  return (
    <>
      <Header name={name} />
      <div className="main">
        <div className="sidebar">
          Sidebar
          <CustomButton color="green">ABC</CustomButton>
        </div>
        <div className="content">
          <CustomButton color="blue">ABC</CustomButton>
          <List productList={productList} />
          <Wrapper>
            <h3>Ahihi</h3>
          </Wrapper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
