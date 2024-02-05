import React from "react";
import staticImages from "../../../conf/ImageConstant";

function MusicTab() {
  return (
    <div
      className="tab-pane fade show active"
      id="music-tab-pane"
      role="tabpanel"
      aria-labelledby="music-tab"
      tabIndex="0"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
          <div className="custom-block bg-white shadow-lg">
            <a href="topics-detail.html">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">Composing Song</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-music rounded-pill ms-auto">45</span>
              </div>

              <img
                src={staticImages.undrawCompose}
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
                  <h5 className="mb-2">Online Music</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-music rounded-pill ms-auto">45</span>
              </div>

              <img
                src={staticImages.undrawHappy}
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
                  <h5 className="mb-2">Podcast</h5>

                  <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                </div>

                <span className="badge bg-music rounded-pill ms-auto">20</span>
              </div>

              <img
                src={staticImages.undrawPodcost}
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

export default MusicTab;
