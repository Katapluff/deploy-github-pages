import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Home from "./container/home/Home.jsx";
import About from "./container/about/About.jsx";
import Rersume from "./container/resume/Resume.jsx";
import Skills from "./container/skills/Skills.jsx";
import Portfolio from "./container/portfolio/Portfolio.jsx";
import Contact from "./container/contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import particles from "./utils.js/particles.js";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Rersume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
