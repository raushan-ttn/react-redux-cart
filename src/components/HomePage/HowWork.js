import React, { useState, useEffect } from "react";

const HowWork = () => {
  const [activeWork, setAc] = useState("");
  const [activeWork1, setAc1] = useState("");
  const [activeWork2, setAc2] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 1600 && offset < 1800 ? setAc("active") : setAc("");
    offset > 1850 && offset < 2100 ? setAc1("active") : setAc1("");
    offset > 2200 && offset < 2500 ? setAc2("active") : setAc2("");
  };

  useEffect(() => {
    // console.log(showTab, "props");
    window.addEventListener("scroll", handleScroll);
  });
  return (
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias
                    illum sed esse ad dignissimos libero sunt, quisquam numquam
                    aliquam? Voluptas, accusamus omnis?
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint animi necessitatibus aperiam repudiandae nam omnis est
                    vel quo, nihil repellat quia velit error modi earum
                    similique odit labore. Doloremque, repudiandae?
                  </p>

                  <div className="icon-holder">
                    <i className="bi-bookmark"></i>
                  </div>
                </li>

                <li className={activeWork2}>
                  <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi vero quisquam, rem assumenda similique voluptas
                    distinctio, iste est hic eveniet debitis ut ducimus beatae
                    id? Quam culpa deleniti officiis autem?
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
              <a href="#" className="btn custom-btn custom-border-btn ms-3">
                Check out Youtube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
