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
            movies:[{id:"", name:""}]
        }
    }

    UNSAFE_componentWillMount() {
        http://www.omdbapi.com/?i=tt3896198
            this.url = "http://localhost:8080/api/User"
        Request.get(this.url).then((response) => {
            this.setState({
               test: response
            })
            console.log(this.state.test)
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
        var movies = _.map(this.state.test, (movie)=>{

            return <li>{movie.Title}</li>
        })
        return (
            <div>

                {/*<Vide parentCallback={this.callbackFunction}/>*/}
                <p>essai</p>
                <p>{movies}</p>
                <Vide/>
            </div>
        )
    }
}

export default Climber;
