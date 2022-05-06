import { useState } from "react";
import BasicForm from "./components/BasicForm";
import Counter from "./components/Counter";

const App = () => {
  const [showCounter, setShowCounter] = useState(false);

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
        Show Counter
      </button>

      {showCounter && <Counter />}
    </>
  );
};

export default App;
