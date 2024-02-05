import React, { useState } from "react";
import staticImages from "../../../conf/ImageConstant";
import FaqItem from "./FaqItem";

const Faqs = () => {
  const faqContent = [
    {
      id: "headingOne",
      show: true,
      controls: "collapseOne",
      name: " Topic Listing is free Bootstrap 5 CSS template.",
      description:
        "Topic Listing is free Bootstrap 5 CSS template.<strong>You are not allowed to redistribute this template </strong> on any other template collection website without our permission. Please contact templateMo for more detail.Thank you.",
    },
    {
      id: "headingTwo",
      show: false,
      controls: "collapseTwo",
      name: "How to find a topic?",
      description:
        "You can search on Google with <strong>keywords</strong> such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.",
    },
    {
      id: "headingThree",
      show: false,
      controls: "collapseThree",
      name: "Does it need to paid?",
      description:
        "You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
  ];
  return (
    <section className="faq-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="clearfix"></div>

          <div className="col-lg-5 col-12">
            <img src={staticImages.faqImg} className="img-fluid" alt="FAQs" />
          </div>

          <div className="col-lg-6 col-12 m-auto">
            <div className="accordion" id="accordionExample">
              {faqContent.map((faq) => (
                <FaqItem key={faq.id} data={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
