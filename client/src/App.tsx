import { Outlet } from "react-router-dom";

import Footer from "./components/WelcomePage/Footer/Footer";
import Header from "./components/WelcomePage/Header/Header";

function App() {
  return (
    <div className="relative bg-[#ffffff]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
