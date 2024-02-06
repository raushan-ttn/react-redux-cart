import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/css/templatemo-topic-listing.css";
import "./App.css";

import { Outlet } from "react-router-dom";
import { HeaderNav, Footer } from "./components";

function App() {
  return (
    <>
      <main>
        <HeaderNav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
