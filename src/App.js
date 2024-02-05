import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/css/templatemo-topic-listing.css";
import "./App.css";

import { Faqs, DiscoverLearn, BrowseTopics, HowWork } from "./components/HomePage";
import { Header } from "./components/Header/Header";
import FeaturedBlock from "./components/HomePage/FeaturedBlock";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <Header />
          <DiscoverLearn />
          <FeaturedBlock />
          <BrowseTopics />
          <HowWork />
          <Faqs />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
