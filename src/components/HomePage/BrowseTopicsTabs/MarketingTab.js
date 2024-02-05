import React from "react";
import staticImages from "../../../conf/ImageConstant";

export default function MarketingTab() {
  return (
    <div
      className="tab-pane fade show active"
      id="marketing-tab-pane"
      role="tabpanel"
      aria-labelledby="marketing-tab"
      tabIndex="0"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Advertising</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-advertising rounded-pill ms-auto">
                  30
                </span>
              </div>

              <img
                src={staticImages.undrawOnline}
                className="custom-block-image img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Video Content</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-advertising rounded-pill ms-auto">
                  65
                </span>
              </div>

              <img
                src={staticImages.undrawGroup}
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
                  <h5 className="mb-2">Viral Tweet</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-advertising rounded-pill ms-auto">
                  50
                </span>
              </div>

              <img
                src={staticImages.undrawTweet}
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
