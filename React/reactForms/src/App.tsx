import { useState } from "react";
import BillsList from "./components/BillsList/BillsList";
import CircleProgress from "./components/CircleProgress/CircleProgress";
import DateSelector from "./components/DateSelector/DateSelector";
import Navbar from "./components/Navbar/Navbar";
import './index.css'

const App = () => {
    const [teste, setTeste] = useState(0)
    return (
        <div>
            <Navbar/>
            <DateSelector/>
            <CircleProgress percentage={teste}/>
            <input type="range" min={0} max={100} className="form-range" onChange={(e) => setTeste(Number(e.target.value))} id="customRange1"></input>
            <BillsList/>
        </div>
    )
}

export default App;