import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  return <div>Chi tiết sản phẩm - {id}</div>;
};

export default ProductDetailPage;
