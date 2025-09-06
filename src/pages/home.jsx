import { useEffect, useState } from "react";
import ProgressBar from "../components/progressBar";
import ChessBoardUI from "../components/chessBoardUI";
import Counter from "../components/counter";

function Home() {
  const [completedPercent, setCompletedPercent] = useState(0);
  const timeToCompleteInterval = 3; // seconds
  useEffect(() => {
    const completedPercentInterval =  setInterval(() => {
        setCompletedPercent((prev) => {
            if(prev <= 99){
                return prev + 1;
            }else{
                clearInterval(completedPercentInterval);
                return 100;
            }
        })
    }, (timeToCompleteInterval * 1000) / 100 );
    return() => {
        clearInterval(completedPercentInterval);
    }
  }, []);

  return (
    <>
      <div className="text-red-500">Namaste Duniya</div>
      {/* {
        completedPercent === 100 ?
        <ChessBoardUI /> :
        <ProgressBar completedPercent={completedPercent} />} */}

        <Counter />
    </>
  );
}

export default Home;
