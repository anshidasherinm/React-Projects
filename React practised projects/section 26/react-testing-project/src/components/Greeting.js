import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  //this is now an integration test since we had 2 comppnents here
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you! </Output>}
      {/* <p>It's good to see you! </p> */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
