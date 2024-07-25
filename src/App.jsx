import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
