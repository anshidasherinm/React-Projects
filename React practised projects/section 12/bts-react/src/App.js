import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  console.log("app running");
  const [showParagraph, setShowparagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    // setShowparagraph(!showParagraph);
    if (allowToggle) {
      setShowparagraph((prevShowParagraph) => !prevShowParagraph);
    }
    // },[setShowparagraph]); works same
    // }, []); // thus the toggleParagarph hander function will be the exact same function , that is it runs only one time
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}

      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
