import React from "react";
import { HeaderPage, ServicePage } from "../components";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>About Services | Topics </title>
      </Helmet>
      <HeaderPage />
      <ServicePage />
    </>
  );
};

export default Service;
