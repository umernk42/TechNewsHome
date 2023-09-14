import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NewSec from "./components/NewSec";
import TrendingSec from "./components/TrendingSec";
import { useState, useEffect } from "react";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="App">
        <NavBar windowWidth={windowWidth}/>
        <Hero windowWidth={windowWidth}/>
        <NewSec />
        <TrendingSec />
      </div>
    </>
  );
}

export default App;
