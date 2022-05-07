import React from "react";

import * as S from "./styles";

function Sidebar({ isShowSidebar }) {
  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      Sidebar
    </S.SidebarWrapper>
  );
}

export default Sidebar;
