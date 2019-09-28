import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Vide from "./Vide";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


const classes = {useStyles};

class Climber extends React.Component {

    state = {message: ""}

    constructor(props) {
        super();
        this.state = {
            text: "Submit",
            name: "",
            climbers: [{name: ""}]
        }
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


    callbackFunction = (childData) => {
        this.setState({message: childData})
    }


    render() {
        return (
            <div>
                {/*<Vide parentCallback={this.callbackFunction}/>*/}
                <p> {this.state.message} </p>
                <Vide/>
            </div>
        )
    }
}

export default Climber;
