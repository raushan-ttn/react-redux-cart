import React from "react";
import { ClientPage, HeaderPage } from "../components";
import { Helmet } from "react-helmet";

const Client = () => {
  return (
    <>
      <Helmet>
        <title>About Clients | Topics </title>
      </Helmet>
      <HeaderPage />
      <ClientPage />
    </>
  );
};

export default Client;
