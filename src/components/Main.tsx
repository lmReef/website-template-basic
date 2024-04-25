import { FC } from "react";
import "./Main.scss";

interface Props {
  children?: React.ReactNode;
}

const Main: FC<Props> = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

export default Main;
