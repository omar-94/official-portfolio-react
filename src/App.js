import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import WebProjects from "./components/WebProjects/WebProjects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import "./app.scss"


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <WebProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
