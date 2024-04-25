import { ElementType } from "react";
import "./Button.scss";

interface ButtonProps {
  text?: string;
  image?: string;
  href?: string;
  newTab?: boolean;
  children?: React.ReactElement;
}

const Button: ElementType = ({
  text,
  image,
  href,
  newTab,
  children,
}: ButtonProps) => {
  console.log(newTab ? "_blank" : "_self");
  return (
    <a href={href} target={newTab ? "_blank" : "_self"}>
      <div className="button">
        {/* display button content */}
        {text ? text : image ? <img src={image} /> : ""}
        {children}
      </div>
    </a>
  );
};

export default Button;
