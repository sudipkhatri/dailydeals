import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Picks from "./Components/Picks";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="body">
        <>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/picks"} element={<Picks />} />
          </Routes>
        </>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
