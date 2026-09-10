import React, { useEffect } from "react";
import Portfolio from "./components/Portfolio";
import "./index.scss";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return <Portfolio />;
}

export default App;
