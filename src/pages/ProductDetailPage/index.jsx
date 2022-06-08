import React, { useEffect } from "react";
import { Button } from "antd";
import {
  useParams,
  useNavigate,
  useLocation,
  generatePath,
} from "react-router-dom";

import { ROUTES } from "../../constants/routes";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    console.log("Gọi data detail của product dự theo ", id);
  }, [id]);

  return (
    <div>
      <div>Chi tiết sản phẩm - Id: {id}</div>
      {!!state && (
        <div>
          <div>Tên sản phẩm: {state.productName}</div>
          <div>Giá: {state.price}</div>
        </div>
      )}
      <Button
        onClick={() =>
          navigate(
            generatePath(ROUTES.ADMIN.PRODUCT_DETAIL, {
              id: 1,
            })
          )
        }
      >
        Sản phẩm tương tự
      </Button>
    </div>
  );
};

export default ProductDetailPage;
