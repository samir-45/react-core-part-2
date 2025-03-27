import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const handleSingle = () => {
        const updatedRun = runs + 1;
        setRuns(updatedRun);
    }

    const handleSix = () => {
        const updatedRun = runs + 6;
        setRuns(updatedRun);
    }

    const handleFour = () => {
        const updatedRun = runs + 4;
        setRuns(updatedRun);
    }
    return(
        <div>
            <h3>Player: Samir</h3>
            {
                runs > 50 && <p>You crossed score: 50</p>
            }
            <h3>Runs: {runs}</h3>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>SIX</button>
        </div>
    )
}