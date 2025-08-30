import { useEffect, useState } from "react";
import ProgressBar from "../components/progressBar";

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
      <ProgressBar completedPercent={completedPercent} />
    </>
  );
}

export default Home;
