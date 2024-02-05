import React from "react";
import staticImages from "../../../conf/ImageConstant";

function EducationTab() {
  return (
    <div
      className="tab-pane fade show active"
      id="education-tab-pane"
      role="tabpanel"
      aria-labelledby="education-tab"
      tabIndex="0"
    >
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Graduation</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-education rounded-pill ms-auto">
                  80
                </span>
              </div>

              <img
                src={staticImages.undrawGraduation}
                className="custom-block-image img-fluid"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Educator</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-education rounded-pill ms-auto">
                  75
                </span>
              </div>

              <img
                src={staticImages.undrawEducator}
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

export default EducationTab;
