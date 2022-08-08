import { useState, useMemo } from "react";

export const Displayer = ({ a, b }) => {
  const [data, setData] = useState(0);

  const sum = useMemo(() => {
    console.log("rodou sum");
    return a + b;
  }, [a, b]);

  return <div>
      A+B = {sum} e {data} <br />
      <button onClick={() => setData(data+1)}>rodar</button>
    </div>;
};
