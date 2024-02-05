import React from "react";
import {
  Faqs,
  DiscoverLearn,
  BrowseTopics,
  HowWork,
  FeaturedBlock,
  GetInTouch
} from "../components/HomePage";

const Home = () => {
  return (
    <>
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
