import React from "react";
import {
  Faqs,
  DiscoverLearn,
  BrowseTopics,
  HowWork,
  FeaturedBlock,
  GetInTouch,
} from "../components/HomePage";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>Home | Topics </title>
      </Helmet> */}
      <DiscoverLearn />
      <FeaturedBlock />
      <BrowseTopics />
      <HowWork />
      <Faqs />
      <GetInTouch />
    </>
  );
};

export default Home;
