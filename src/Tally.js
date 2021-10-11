import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Tally(props) {

    return (
        
            <Card>
                <Card.Body>
            <h1>Tally Counter {props.tallyName}</h1>
            <p>{props.count}</p>
            <Button onClick={() => props.incrementHandler()} >Increase</Button>
            <Button onClick={() => props.resetHandler()}>Reset</Button>
            </Card.Body>
            </Card>

    );

}

export default Tally