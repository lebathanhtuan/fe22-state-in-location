import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

function LoginLayout() {
  const userName = "Tuấn";

  return (
    <>
      <Header name={userName} />
      <Outlet />
      <Footer />
    </>
  );
}

export default LoginLayout;
