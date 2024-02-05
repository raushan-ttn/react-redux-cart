import { useState, useEffect, useReducer } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/css/templatemo-topic-listing.css";
import "./App.css";

import staticImages from "./conf/ImageConstant";

import {
  WebdesignTab,
  MarketingTab,
  FinanceTab,
  MusicTab,
  EducationTab,
} from "./components/HomePage/BrowseTopicsTabs";

import { Faqs } from "./components/HomePage";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTab, setShowTab] = useState("design-tab-pane");
  const [activeWork, setAc] = useState("");
  const [activeWork1, setAc1] = useState("");
  const [activeWork2, setAc2] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset, "ddd");
    offset > 200 ? setScrolled(true) : setScrolled(false);
    offset > 1600 && offset < 1800 ? setAc("active") : setAc("");
    offset > 1850 && offset < 2100 ? setAc1("active") : setAc1("");
    offset > 2200 && offset < 2500 ? setAc2("active") : setAc2("");
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

  const homeTabs = (event) => {
    setShowTab(event.target.attributes.getNamedItem("aria-controls").value);
  };

  return (
    <>
      <div className="App">
        <main>
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

                <div className="d-lg-none ms-auto me-4">
                  <a
                    href="#top"
                    className="navbar-icon bi-person smoothscroll"
                  ></a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-lg-5 me-lg-auto">
                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_1">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_2">
                        Browse Topics
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_3">
                        How it works
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_4">
                        FAQs
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link click-scroll" href="#section_5">
                        Contact
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarLightDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="navbarLightDropdownMenuLink"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="topics-listing.html"
                          >
                            Topics Listing
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="contact.html">
                            Contact Form
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="d-none d-lg-block">
                    <a
                      href="#top"
                      className="navbar-icon bi-person smoothscroll"
                    ></a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <section
            className="hero-section d-flex justify-content-center align-items-center"
            id="section_1"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 mx-auto">
                  <h1 className="text-white text-center">
                    Discover. Learn. Enjoy
                  </h1>

                  <h6 className="text-center">
                    platform for creatives around the world
                  </h6>

                  <form
                    method="get"
                    className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
                    role="search"
                  >
                    <div className="input-group input-group-lg">
                      <span
                        className="input-group-text bi-search"
                        id="basic-addon1"
                      ></span>

                      <input
                        name="keyword"
                        type="search"
                        className="form-control"
                        id="keyword"
                        placeholder="Design, Code, Marketing, Finance ..."
                        aria-label="Search"
                      />

                      <button type="submit" className="form-control">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="featured-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                  <div className="custom-block bg-white shadow-lg">
                    <a href="topics-detail.html">
                      <div className="d-flex">
                        <div>
                          <h5 className="mb-2">Web Design</h5>

                          <p className="mb-0">
                            When you search for free CSS templates, you will
                            notice that TemplateMo is one of the best websites.
                          </p>
                        </div>

                        <span className="badge bg-design rounded-pill ms-auto">
                          14
                        </span>
                      </div>

                      <img
                        src={staticImages.slideImg1}
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="custom-block custom-block-overlay">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="images/businesswoman-using-tablet-analysis.jpg"
                        className="custom-block-image img-fluid"
                        alt=""
                      />

                      <div className="custom-block-overlay-text d-flex">
                        <div>
                          <h5 className="text-white mb-2">Finance</h5>

                          <p className="text-white">
                            Topic Listing Template includes homepage, listing
                            page, detail page, and contact page. You can feel
                            free to edit and adapt for your CMS requirements.
                          </p>

                          <a
                            href="topics-detail.html"
                            className="btn custom-btn mt-2 mt-lg-3"
                          >
                            Learn More
                          </a>
                        </div>

                        <span className="badge bg-finance rounded-pill ms-auto">
                          25
                        </span>
                      </div>

                      <div className="social-share d-flex">
                        <p className="text-white me-4">Share:</p>

                        <ul className="social-icon">
                          <li className="social-icon-item">
                            <a
                              href="#"
                              className="social-icon-link bi-twitter"
                            ></a>
                          </li>

                          <li className="social-icon-item">
                            <a
                              href="#"
                              className="social-icon-link bi-facebook"
                            ></a>
                          </li>

                          <li className="social-icon-item">
                            <a
                              href="#"
                              className="social-icon-link bi-pinterest"
                            ></a>
                          </li>
                        </ul>

                        <a
                          href="#"
                          className="custom-icon bi-bookmark ms-auto"
                        ></a>
                      </div>

                      <div className="section-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="explore-section section-padding" id="section_2">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="mb-4">Browse Topics</h2>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#design-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="design-tab-pane"
                      aria-selected="true"
                      onClick={homeTabs}
                    >
                      Design
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="marketing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#marketing-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="marketing-tab-pane"
                      aria-selected="false"
                      onClick={homeTabs}
                    >
                      Marketing
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="finance-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#finance-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="finance-tab-pane"
                      aria-selected="false"
                      onClick={homeTabs}
                    >
                      Finance
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="music-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#music-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="music-tab-pane"
                      aria-selected="false"
                      onClick={homeTabs}
                    >
                      Music
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="education-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#education-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="education-tab-pane"
                      aria-selected="false"
                      onClick={homeTabs}
                    >
                      Education
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content" id="myTabContent">
                    {showTab === "design-tab-pane" ? <WebdesignTab /> : null}
                    {showTab === "marketing-tab-pane" ? <MarketingTab /> : null}
                    {showTab === "finance-tab-pane" ? <FinanceTab /> : null}
                    {showTab === "music-tab-pane" ? <MusicTab /> : null}
                    {showTab === "education-tab-pane" ? <EducationTab /> : null}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="timeline-section section-padding" id="section_3">
            <div className="section-overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="text-white mb-4">How does it work?</h2>
                </div>

                <div className="col-lg-10 col-12 mx-auto">
                  <div className="timeline-container">
                    <ul
                      className="vertical-scrollable-timeline"
                      id="vertical-scrollable-timeline"
                    >
                      <div className="list-progress">
                        <div className="inner"></div>
                      </div>

                      <li className={activeWork}>
                        <h4 className="text-white mb-3">
                          Search your favourite topic
                        </h4>

                        <p className="text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reiciendis, cumque magnam? Sequi, cupiditate
                          quibusdam alias illum sed esse ad dignissimos libero
                          sunt, quisquam numquam aliquam? Voluptas, accusamus
                          omnis?
                        </p>

                        <div className="icon-holder">
                          <i className="bi-search"></i>
                        </div>
                      </li>

                      <li className={activeWork1}>
                        <h4 className="text-white mb-3">
                          Bookmark &amp; Keep it for yourself
                        </h4>

                        <p className="text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Sint animi necessitatibus aperiam repudiandae
                          nam omnis est vel quo, nihil repellat quia velit error
                          modi earum similique odit labore. Doloremque,
                          repudiandae?
                        </p>

                        <div className="icon-holder">
                          <i className="bi-bookmark"></i>
                        </div>
                      </li>

                      <li className={activeWork2}>
                        <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                        <p className="text-white">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Animi vero quisquam, rem assumenda similique
                          voluptas distinctio, iste est hic eveniet debitis ut
                          ducimus beatae id? Quam culpa deleniti officiis autem?
                        </p>

                        <div className="icon-holder">
                          <i className="bi-book"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 text-center mt-5">
                  <p className="text-white">
                    Want to learn more?
                    <a
                      href="#"
                      className="btn custom-btn custom-border-btn ms-3"
                    >
                      Check out Youtube
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-section section-padding" id="section_4">
            <Faqs />
          </section>

          <section
            className="contact-section section-padding section-bg"
            id="section_5"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12 text-center">
                  <h2 className="mb-5">Get in touch</h2>
                </div>

                <div className="col-lg-5 col-12 mb-4 mb-lg-0">
                  <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                    width="100%"
                    height="250"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                  <h4 className="mb-3">Head office</h4>

                  <p>
                    Bay St &amp;, Larkin St, San Francisco, CA 94109, United
                    States
                  </p>

                  <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <a href="tel: 305-240-9671" className="site-footer-link">
                      305-240-9671
                    </a>
                  </p>

                  <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <a
                      href="mailto:info@company.com"
                      className="site-footer-link"
                    >
                      info@company.com
                    </a>
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mx-auto">
                  <h4 className="mb-3">Dubai office</h4>

                  <p>Burj Park, Downtown Dubai, United Arab Emirates</p>

                  <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <a href="tel: 110-220-3400" className="site-footer-link">
                      110-220-3400
                    </a>
                  </p>

                  <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <a
                      href="mailto:info@company.com"
                      className="site-footer-link"
                    >
                      info@company.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
