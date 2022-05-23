import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
  },
  {
    title: "Quản lý người dùng",
    path: ROUTES.ADMIN.USER_LIST,
  },
  {
    title: "Quản lý sản phẩm",
    path: ROUTES.ADMIN.PRODUCT_LIST,
  },
  {
    title: "Quản lý đơn hàng",
    path: ROUTES.ADMIN.ORDER_LIST,
  },
];

function Sidebar({ isShowSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  function renderSidebarMenu() {
    return SIDEBAR_MENU.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          active={item.path === location.pathname}
          onClick={() => navigate(item.path)}
        >
          {item.title}
        </S.SidebarItem>
      );
    });
  }
  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      {renderSidebarMenu()}
    </S.SidebarWrapper>
  );
}

export default Sidebar;
