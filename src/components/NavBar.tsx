import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Button from "./Button";
import "./NavBar.scss";

const NavBar: FC = () => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-block left">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <h1>Basic Template</h1>
            </div>
          </Link>
        </div>

        <div className="nav-block center">
          <Button text="Home" href="/" />
          <Button text="About" href="/about" />
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
