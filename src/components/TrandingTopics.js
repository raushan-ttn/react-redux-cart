import React from "react";

const TrandingTopics = () => {
  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h3 className="mb-4">Trending Topics</h3>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <a href="topics-detail.html">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Investment</h5>

                    <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                  </div>

                  <span className="badge bg-finance rounded-pill ms-auto">30</span>
                </div>

                <img
                  src="images/topics/undraw_Finance_re_gnv2.png"
                  className="custom-block-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mt-lg-3">
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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sint animi necessitatibus aperiam repudiandae nam omnis
                    </p>

                    <a
                      href="topics-detail.html"
                      className="btn custom-btn mt-2 mt-lg-3"
                    >
                      Learn More
                    </a>
                  </div>

                  <span className="badge bg-finance rounded-pill ms-auto">25</span>
                </div>

                <div className="social-share d-flex">
                  <p className="text-white me-4">Share:</p>

                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>

                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>

                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-pinterest"></a>
                    </li>
                  </ul>

                  <a href="#" className="custom-icon bi-bookmark ms-auto"></a>
                </div>

                <div className="section-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrandingTopics;
