import React, {useState} from 'react'

function Route() {

    let name= "fa";
    let route = "plus belle que le ciel et la mer";
    let place = "Auray"

    const [items, setItems] = useState([]);
    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: Math.random(),
            name:name,
            route:route,
            place:place
        }])
    };
    return (
        <div>
            <button onClick={addItem}>add a climber</button>
            <ul>
                {items.map(item =>( <li key={item.id}>{item.id}{" " }{item.name}</li>))}
                {/*<button onClick={() => setCount(count + 1)}>Count {count}</button>*/}
            </ul>
            <ul>
                {items.map(item =>( <li key={item.id}> {item.name}{" " }{item.route}{" " }{item.place}</li>))}
                {/*<button onClick={() => setCount(count + 1)}>Count {count}</button>*/}
            </ul>

        </div>
    )
}

export default Route
