import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  const breadcrumbLinks = segments.map((segment, i) => {
    return (
      <li key={i} className="breadcrumb-item">
        <Link to={`http://localhost:3000/${segment}`}>
          {segment === "" ? "Home" : segment}
        </Link>
      </li>
    );
  });
  // Return final breadcrumb.
  return breadcrumbLinks;
};

export default Breadcrumb;
