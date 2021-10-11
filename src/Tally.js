

function Tally(props) {

    return (
        <>
            <h1>Tally Counter {props.tallyName}</h1>
            <p>{props.count}</p>
            <button onClick={() => props.incrementHandler()} >Increase</button>
            <button onClick={() => props.resetHandler()}>Reset</button>
        </>
    );

}

export default Tally