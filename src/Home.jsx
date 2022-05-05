import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import List from "./List";

function Home({ name }) {
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
        <div className="sidebar">Sidebar</div>
        <div className="content">
          <List productList={productList} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
