import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementType } from "react";
import logo from "../logo.svg";
import Button from "./Button";
import "./NavBar.scss";

const NavBar: ElementType = () => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-block left">
          <a href="/">
            <div className="logo">
              <img src={logo} />
              <h1>Basic Template</h1>
            </div>
          </a>
        </div>

        <div className="nav-block center">
          <Button text="More Templates" href="/" newTab>
            <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
          </Button>
        </div>

        <div className="nav-block right">
          <Button
            href="https://github.com/lmReef/website-template-basic"
            newTab
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </Button>
        </div>
      </nav>
      {/* because the nav is `position: fixed;` */}
      <span className="nav-space-placeholder" />
    </>
  );
};

export default NavBar;
