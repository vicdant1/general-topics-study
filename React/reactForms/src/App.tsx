import { useMemo, useState } from "react";
import BasicForm from "./components/BasicForm";
import Counter from "./components/Counter";

const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  const [randomInputState, setRandomInputState] = useState("");

  const calcBoolean = useMemo(() => {
    console.log("function called");
    if (showCounter == true) return "TRUE";
    else return "FALSE";
  }, [showCounter]);

  return (
    <>
      <h4 className="text-center mt-2">Estudando Formularios React</h4>
      <BasicForm
        email="abluble@abluble.com"
        password="123123123"
        brand="oracle"
        message="fonclbriscph"
        price={2}
      />
      <br />
      <h4 className="text-center mt-2">
        Study ReactHooks and Context Stuff(ContextAPI || Redux)
      </h4>
      <button
        onClick={() => setShowCounter(!showCounter)}
        className="btn btn-primary"
      >
        {!showCounter ? "Show" : "Close"} Counter
      </button>
      {showCounter && <Counter />}
      <hr />
      calcBoolean does not depends on any other state change than showCounter,
      so we could memo this value and just listen to showCounter changes. <br />
      {calcBoolean}
      <input
        type="text"
        name="random"
        id="random"
        onChange={(e) => setRandomInputState(e.target.value)}
      />
      <br />
    </>
  );
};

export default App;
