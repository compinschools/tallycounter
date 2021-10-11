import { useState } from 'react';
import './App.css';
import Tally from './Tally';

function App() {
  const [counters, changeCounters] = useState([]);
  const [counterIndex, changeCounterIndex] = useState(0);

  const generateCounters = () => {
    return counters.map((v) => (
    <Tally 
      tallyName={"Tally" + v.id} 
      count={v.count}
      startsAt={v.startsAt}
      incrementHandler={() => incrementCounter(v.id,true)}
      resetHandler={() => incrementCounter(v.id,false)}
      />));
  }

  const AddTally = () => {
    changeCounters((prev) => [...prev, { id: counterIndex, startsAt: counterIndex, count: counterIndex }])
    changeCounterIndex(counterIndex + 1);
  }

  const RemoveTally = () => {
    if (counterIndex > 0) {
      changeCounters((prev) => prev.slice(0, prev.length - 1))
      changeCounterIndex(counterIndex - 1);
    }
  }

  const incrementCounter = (theid,arg) => {
    const updated = counters.map ( (value) => {
      if(value.id === theid){
        if(arg) {
          return {id:theid, startsAt: value.startsAt, count: value.count + 1}
        } else {
          return {id:theid, startsAt: value.startsAt,count:value.startsAt}
        }
      }
      return value;

    })
    changeCounters(updated);
  }

  return (
    <>
      <button onClick={() => AddTally()}>Add Tally Counter</button>
      <button onClick={() => RemoveTally()}>Remove Tally Counter</button>
      {generateCounters()}
    </>
  );
}

export default App;
