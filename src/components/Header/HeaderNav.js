import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useHeaderLink from './HeaderLink';
import LogoutBtn from '../admin/LogoutBtn';
import { useSelector } from 'react-redux';

const HeaderNav = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = useHeaderLink();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 200 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    // console.log(showTab, "props");
    window.addEventListener('scroll', handleScroll);
  });
  let x = ['sticky-wrapper'];
  let navBar = {};
  if (scrolled) {
    x.push('is-sticky');
    navBar = { width: '1837px', position: 'fixed', top: '0px' };
  }
  const navigateToLink = (item) => {
    if (item.scroll) {
      const section = document.querySelector(item.slug);
      if (section != null) {
        return setTimeout(
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          }),
          1000
        );
      } else {
        return navigate(`/${item.slug}`);
      }
    }
  };
  return (
    <>
      <div
        id="sticky-wrapper"
        className={x.join(' ')}
        style={{ height: '78px' }}
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
                        item.children.length > 0 ? 'dropdown' : null
                      }`}
                    >
                      {item.scroll ? (
                        <button
                          onClick={() => navigateToLink(item)}
                          className={`nav-link click-scroll button_a ${
                            item.children.length > 0 ? 'dropdown-toggle' : null
                          }`}
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link className="nav-link button_a"  to={`${item.slug}`}>
                          {`${item.name}`}
                        </Link>
                      )}

                      {item.children.length > 0 ? (
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="navbarLightDropdownMenuLink"
                        >
                          {item.children.map((cItem) =>
                            cItem.active ? (
                              <li key={cItem.name}>
                                <Link className="dropdown-item" to={cItem.slug}>
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
                {authStatus ? (
                  <li className='nav-item null'>
                    <LogoutBtn />{' '}
                  </li>
                ) : null}
              </ul>
              {/* <div className="d-none d-lg-block">
                <a href="/login" className="navbar-icon bi-person smoothscroll"></a>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNav;
