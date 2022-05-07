import React, { useState } from "react";
import { Button } from "react-bootstrap";

import * as S from "../styles";

function Item({ productName, isNew }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <S.ItemWrapper isNew={isNew} isSelected={isSelected}>
      <p>{productName}</p>
      <Button
        size="sm"
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? "Hủy" : "Chọn"}
      </Button>
    </S.ItemWrapper>
  );
}

export default Item;
