import React, { useState } from "react";
// import staticImages from "../../../conf/ImageConstant";
import WebdesignTab from "./WebdesignTab";
import EducationTab from "./EducationTab";
import FinanceTab from "./FinanceTab";
import MarketingTab from "./MarketingTab";
import MusicTab from "./MusicTab";

const BrowseTopics = () => {
  const [showTab, setShowTab] = useState("design-tab-pane");

  const homeTabs = (event) => {
    setShowTab(event.target.attributes.getNamedItem("aria-controls").value);
  };

  return (
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
  );
};

export default BrowseTopics;
