import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { Displayer } from "./Displayer";

function App() {
  const [base_url, setBaseUrl] = useState("https://restcountries.com/v3.1/");
  const [countries, setCountries] = useState([]);

  const [value1, setValue1] = useState(1);

  const fetchData = useCallback(async () => {
    await fetch(base_url + "name/brazil")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(countries);
      });
  }, [base_url]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 200);
  }, [fetchData]);

  return (
    <div className="App">
      hello world
      {countries.length > 0 ? (
        countries.map((country, i) => <p key={i}>{country.fifa}</p>)
      ) : (
        <div>Loading...</div>
      )}
      <button
        onClick={() => {
          setBaseUrl("https://restcountries.com/v3/");
          console.log(base_url);
        }}
      >
        change base url
      </button>
      <br />
      <button
        onClick={() => {
          setValue1(value1 +1);
        }}
      >
        change value
      </button>
      <Displayer a={value1} b={2} />
    </div>
  );
}

export default App;
