import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ onReceiveBread }) => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');

  useEffect(() => {
    // pass data in parent component.
    onReceiveBread(segments);
  }, []);

  const breadcrumbLinks = segments.map((segment, i) => {
    return (
      <li key={i} className="breadcrumb-item">
        <Link style={{color:'white'}} to={`http://localhost:3000/${segment}`}>
          {segment === '' ? 'Home' : segment}
        </Link>
      </li>
    );
  });
  // Return final breadcrumb.
  return breadcrumbLinks;
};

export default Breadcrumb;
