import React, { useEffect, useMemo, useState } from "react";

interface SumProps{
    sumFunction: Function
}

const Sum:React.FC<SumProps> = ({sumFunction}) => {
    useEffect(() => {
        console.log('sum component mounted')
    }, [])

    const [internalCounter, setInternalCounter] = useState<number>(0);
    const [totalSum, setTotalSum] = useState<number>(0);

    return (
        <div>
            Sum: {totalSum}<br />

            Direct sum: {useMemo(() => sumFunction(1, internalCounter), [internalCounter])} <br />

            <button className="btn btn-danger" onClick={() => setInternalCounter(internalCounter + 1)}>Increment INTERNAL counter</button> <br />
            <button className="btn btn-success" onClick={() => setTotalSum(sumFunction(1, internalCounter))}>Sum</button> <br />

            INTERNAL COUNTER: {internalCounter} <br />

            important: do not call directly functions passed by params inside of tsx because it will hurt useCallback principles. The component will display information and call function over and over again. It means useCallback will not be useful, try to put useMemo + useCallback when using this approach and display things with it own states     
        </div>
    )
}

export default Sum;