import React from "react";
import { AboutPage, TrandingTopics, HeaderPage } from "../components";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      {/* <Helmet>
        <title>About us | Topics </title>
      </Helmet> */}
      <HeaderPage />
      <AboutPage />
      <TrandingTopics />
    </>
  );
};

export default About;
