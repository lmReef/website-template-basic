import { FC } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface ButtonProps {
  text?: string;
  image?: string;
  href?: string;
  newTab?: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ text, image, href, newTab, children }) => {
  return (
    <Link to={href || "/"} target={newTab ? "_blank" : "_self"}>
      <div className="button">
        {/* display button content */}
        {text ? text : image ? <img src={image} /> : ""}
        {children}
      </div>
    </Link>
  );
};

export default Button;
