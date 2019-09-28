import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Climber from "./Climber";
import Request from "superagent";

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
            climbers: [{name: ""}],
            enumText :"es"
        }
    }

// avant que le component soit monter
    UNSAFE_componentWillMount() {
        this.search()
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

    query (){
        this.search(this.refs.queryBox.value)
    }


    search(param="User"){
        Request.get(this.url).then((response) => {
            let url =`http://localhost:8080/api/${param}}`
        })

    }

    handleEvent = event => {
        alert("I was clicked");
    };


    render() {
        return (
            <div>
                <input ref="textBox" type="text"/>
                <input ref="difficultyBox" type="number"/>
                <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => {
                    this.clicked("test");
                    this.addClimbers()
                }}>
                    {this.state.text}
                </Button>

                <input ref="queryBox" type="text" onChange={(event => {this.query()})}/>
                <div>
                    {/*<Climber parentCallback={this.callbackFunction}/>*/}
                    {/*<p> {this.state.message} </p>*/}
                </div>
                <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => {
                    this.query("ess")}}>Query
                </Button>
            </div>
        )
    }
}

export default Vide;
