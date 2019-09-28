import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Climber from "./Climber";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


const classes = {useStyles};

class Vide extends React.Component {


    state = {message: ""}

    constructor(props) {
        super();
        this.state = {
            text: "Submit",
            name: "",
            climbers: [{name: ""}]
        }
    }

// avant que le component soit monter
    UNSAFE_componentWillMount() {
    }
// apres que le component soit effacer
    UNSAFE_componentWillUnmount() {
    }
    // a la receptikon de nouvelle valeurs props
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps.name)
    }

    // a l'update du composant
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.name)

    }

    clicked(text) {
        this.setState({text: this.refs.textBox.value})
    }

    addClimbers = () => {
        this.setState({
            climbers: this.state.climbers.concat([{name: this.refs.textBox.value}])

        });
        console.log(this.state.climbers.map(climber => climber.name))
    }

    handleEvent = event => {
        alert("I was clicked");
    };


    render() {
        return (
            <div>
                <input ref="textBox" type="text"/>
                <input ref="difficultyBox" type="number"/>
                <input ref="enumBox" type="text"/>
                <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => {
                    this.clicked("test");
                    this.addClimbers()
                }}>
                    {this.state.text}
                </Button>
                <div>
                    {/*<Climber parentCallback={this.callbackFunction}/>*/}
                    <p> {this.state.message} </p>
                </div>
            </div>
        )
    }
}

export default Vide;
