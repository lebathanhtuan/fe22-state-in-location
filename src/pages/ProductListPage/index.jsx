import React, { useEffect, useState } from "react";
import { InputNumber, Button } from "antd";

function goiAPI() {
  console.log("Gọi API");
}

const ProductListPage = ({ name, setName }) => {
  const [pin1, setPin1] = useState(0);
  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);
  const [pin4, setPin4] = useState(0);

  goiAPI();

  useEffect(() => {
    if (
      pin1 === 5 &&
      pin2 === 3 &&
      pin3 === 2 &&
      pin4 === 1 &&
      name === "Tuấn"
    ) {
      console.log("Unlock");
    }
  }, [pin1, pin2, pin3, pin4, name]);

  useEffect(() => {
    return () => {
      setName("");
      console.log("Mới thoát Product List Page");
    };
  }, []);

  return (
    <div>
      <Button onClick={() => setName("Tuấn")}>
        Set Name
      </Button>
      Danh sách sản phẩn - {name}
      <div>
        <InputNumber onChange={(value) => setPin1(value)} />
        <InputNumber onChange={(value) => setPin2(value)} />
        <InputNumber onChange={(value) => setPin3(value)} />
        <InputNumber onChange={(value) => setPin4(value)} />
      </div>
    </div>
  );
};

export default ProductListPage;
