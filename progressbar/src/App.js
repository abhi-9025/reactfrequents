
import { useEffect, useRef, useState } from 'react';
import ProgressBar from './component/ProgressBar';

const totalTime=10000
const interval=1000
const totalCycle=totalTime/interval
const progressMade=(interval/totalTime)*100
// kept outside to because to rerendering
function App() {
  const [progress,setProgrss]=useState(0)
  const timer=useRef(0)
  const cyclesCompleted=useRef(0)

  useEffect(()=>{
    timer.current=setInterval(()=>{
        cyclesCompleted.current+=1;
        setProgrss(prev=>prev+progressMade)
        if(cyclesCompleted.current===totalCycle)
            { 
              setProgrss(0)
              cyclesCompleted.current=0;
            clearInterval(timer.current)}
    },interval)
    return ()=>{
       clearInterval(timer.current)
    }
  })
  return (
    <div >
      <ProgressBar progress={progress}/>
    </div>
  );
}

export default App;
