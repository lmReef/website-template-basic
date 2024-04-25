import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Just a basic template for personal reference.</p>
      <span>
        Check out the source code on GitHub{" "}
        <Link
          to="https://github.com/lmReef/website-template-basic"
          target="_blank"
        >
          here
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="icon inline-with-text"
          />
        </Link>
      </span>
    </div>
  );
};

export default About;
