import { ElementType } from "react";
import "./Main.scss";

const Main: ElementType = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

export default Main;
