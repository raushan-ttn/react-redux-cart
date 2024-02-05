import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/css/templatemo-topic-listing.css";
import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
