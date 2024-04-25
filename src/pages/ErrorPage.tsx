import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import {
  ErrorResponse,
  isRouteErrorResponse,
  Link,
  useRouteError,
} from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage: FC = () => {
  const error: unknown = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! We ran into an issue.</h1>
      <Link to="/" className="go-back">
        <h2>Back to Home</h2>
        <FontAwesomeIcon icon={faRotateLeft} className="icon" />
      </Link>
      {isRouteErrorResponse(error) && (
        <p>
          {error.status} {error.statusText}
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
