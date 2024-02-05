import React from "react";
import staticImages from "../../../conf/ImageConstant";

function WebdesignTab() {
  return (
    <div
      className="tab-pane fade show active"
      id="design-tab-pane"
      role="tabpanel"
      aria-labelledby="design-tab"
      tabIndex="0"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Web Design</h5>

                  <p className="mb-0">
                    Topic Listing Template based on Bootstrap 5
                  </p>
                </div>

                <span className="badge bg-design rounded-pill ms-auto">14</span>
              </div>

              <img
                src={staticImages.slideImg1}
                className="custom-block-image img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Graphic</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-design rounded-pill ms-auto">75</span>
              </div>

              <img
                src={staticImages.graphImg}
                className="custom-block-image img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Logo Design</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-design rounded-pill ms-auto">
                  100
                </span>
              </div>

              <img
                src={staticImages.logoImg}
                className="custom-block-image img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebdesignTab;
