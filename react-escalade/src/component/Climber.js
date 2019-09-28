import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Vide from "./Vide";
import Request from 'superagent'
import _ from 'lodash'


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
    url;
    state = {message: ""}

    constructor(props) {
        super();
        this.state = {
            text: "Submit",
            name: "",
            climbers: [{name: ""}],
        }
    }

    UNSAFE_componentWillMount() {
        //http://www.omdbapi.com/?i=tt3896198
            this.url = "http://localhost:8080/api/User"
        Request.get(this.url).then((response) => {
            this.setState({
               test: response.body,
                climbers:this.state.test

            })

        });
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
        var climbers = _.map(this.state.test, (climber)=>{

            return <li>{climber.id}</li>
        })
        return (
            <div>

                {/*<Vide parentCallback={this.callbackFunction}/>*/}
                <p>essai</p>
                <p>{climbers}</p>
                <Vide/>
            </div>
        )
    }
}

export default Climber;
