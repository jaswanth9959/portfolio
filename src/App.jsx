import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import PreLoader from "./components/PreLoader";
import { useEffect } from "react";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {load ? (
        <PreLoader />
      ) : (
        <>
          <NavBar />
          <Home />
          <Links />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
