import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import navItems from "./HeaderLink";

const HeaderNav = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 200 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    // console.log(showTab, "props");
    window.addEventListener("scroll", handleScroll);
  });
  let x = ["sticky-wrapper"];
  let navBar = {};
  if (scrolled) {
    x.push("is-sticky");
    navBar = { width: "1837px", position: "fixed", top: "0px" };
  }

  return (
    <>
      <div
        id="sticky-wrapper"
        className={x.join(" ")}
        style={{ height: "78px" }}
      >
        <nav className="navbar navbar-expand-lg" style={navBar}>
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <i className="bi-back"></i>
              <span>Topic</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                {navItems.map((item) =>
                  item.active ? (
                    <li
                      key={item.name}
                      className={`nav-item ${
                        item.children.length > 0 ? "dropdown" : null
                      }`}
                    >
                      <button
                        onClick={
                          item.scroll
                            ? () => {
                                const section = document.querySelector(
                                  item.slug
                                );
                                if (section != null) {
                                  section.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                } else {
                                  navigate(`/${item.slug}`);
                                }
                              }
                            : null
                        }
                        className={`nav-link click-scroll button_a ${
                          item.children.length > 0 ? "dropdown-toggle" : null
                        }`}
                      >
                        {item.name}
                      </button>
                      {item.children.length > 0 ? (
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="navbarLightDropdownMenuLink"
                        >
                          {item.children.map((cItem) =>
                            cItem.active ? (
                              <li key={cItem.name}>
                                <Link
                                  ref={cItem.ref}
                                  className="dropdown-item"
                                  to={cItem.slug}
                                >
                                  {cItem.name}
                                </Link>
                              </li>
                            ) : null
                          )}
                        </ul>
                      ) : null}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNav;
