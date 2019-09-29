import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const classes = {useStyles};
let x=1

function Route(props) {

    let name= props.children[0];
    let route = props.children[1];
    let place = props.children[2];
    let showMyComponent = props.children[3];

    const [items, setItems] = useState([]);
    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: Math.random(),
            name:name,
            route:route,
            place:place,
            showMyComponent: showMyComponent
        }])
    };
    console.log("Route  "+props.children)
    return (
        <div>

            <ul>
                {items.map(item =>( <li key={item.id}>Climber: {item.name}{" Route:" }{item.route}{" Place" }{item.place}</li>))}
                {/*<button onClick={() => setCount(count + 1)}>Count {count}</button>*/}
            </ul>
            <button onClick={addItem}>add a climber</button>
        </div>
    )
}

export default Route
