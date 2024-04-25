import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

/// Basic routes layout
const BasicLayout: FC = () => {
  return (
    <div className="layout-basic">
      <NavBar />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};

export default BasicLayout;
