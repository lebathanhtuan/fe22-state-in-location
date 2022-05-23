import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import * as S from "./styles";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const userName = "Tuấn";

  // useEffect(() => {
  //   console.log("Mới vào Admin Layout");
  // }, []);

  return (
    <>
      <Header
        name={userName}
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <S.MainWrapper>
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.ContentWrapper isShowSidebar={isShowSidebar}>
          <Outlet />
        </S.ContentWrapper>
      </S.MainWrapper>
      <Footer />
    </>
  );
}

export default AdminLayout;
