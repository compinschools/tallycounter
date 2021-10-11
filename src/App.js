import { useState } from 'react';

import Tally from './Tally';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

function App() {
  const [counters, changeCounters] = useState([]);
  const [counterIndex, changeCounterIndex] = useState(0);

  const generateCounters = () => {
    return counters.map((v) => (
      <Tally
        tallyName={"Tally" + v.id}
        count={v.count}
        startsAt={v.startsAt}
        incrementHandler={() => incrementCounter(v.id)}
        resetHandler={() => resetCounter(v.id)}
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

  const incrementCounter = (theid) => {
    const updated = counters.map((value) => {
      if (value.id === theid) {
        return { id: theid, startsAt: value.startsAt, count: value.count + 1 }
      } else {

        return value;
      }
    })
    changeCounters(updated);
  }

  const resetCounter = (theid) => {
    const updated = counters.map((value) => {
      if (value.id === theid) {
        return { id: theid, startsAt: value.startsAt, count: value.startsAt }
      }
      else {
        return value;
      }
    })
    changeCounters(updated);
  }

  const resetAllCounters = () => {
    const updated = counters.map((value) => {
        return { id: value.id, startsAt: value.startsAt, count: value.startsAt }
    })
    changeCounters(updated);
  }

  return (
    <>
      <Button onClick={() => AddTally()}>Add Tally Counter</Button>
      <Button onClick={() => RemoveTally()}>Remove Tally Counter</Button>
      <Button onClick={() => resetAllCounters()}>Reset All</Button>
      <Container fluid>
        <Row>
          <Col>{generateCounters()}</Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
