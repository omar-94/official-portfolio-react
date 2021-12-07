import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import WebProjects from "./components/WebProjects/WebProjects";
import Contact from "./components/Contact/Contact";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Navbar />
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
