import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error404">
      <p>Page Not Found</p>
      <p className="sign404">404</p>

      <Link to="/">
        <button className="button-secondary">back to home</button>
      </Link>
    </div>
  );
};

export default Error404;
