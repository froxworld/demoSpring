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
    test = 10;

    url;
    state = {message: ""}

    constructor(props) {
        super();
        this.state = {
            climbers: [{'id': 0, 'name': 'francois', 'level': '8a', 'place': 'Rennes'},
                {'id': 1, 'name': 'francois', 'level': '8a', 'place': 'Rennes'},
                {'id': 2, 'name': 'théotime', 'level': '8b', 'place': 'Rennes'},
                {'id': 3, 'name': 'léo', 'level': '8a', 'place': 'Rennes'},
                {'id': 4, 'name': 'alma', 'level': '7b', 'place': 'Rennes'},
                {'id': 5, 'name': 'alex', 'level': '6c', 'place': 'Rennes'},
                {'id': 6, 'name': 'Elliot', 'level': '6b', 'place': 'Rennes'},
                {'id': 7, 'name': 'justin', 'level': '6c', 'place': 'Rennes'},
                {'id': 8, 'name': 'roland', 'level': '7c', 'place': 'Rennes'},
                {'id': 9, 'name': 'marie', 'level': '7a', 'place': 'Rennes'}]
        }
    }

    UNSAFE_componentWillMount() {
        //http://www.omdbapi.com/?i=tt3896198
        this.url = "http://localhost:8080/api/User"
        // Request.get(this.url).then((response) => {
        //     this.setState({
        //        test: response.body,
        //         climbers:this.state.test
        //
        // //     })
        //
        // });
    }

    clicked(text) {
        this.test=this.state.climbers+1;
        console.log(this.test)

        this.setState({
            climbers: this.state.climbers.push({id:this.test, name: 't', level: 'r', place: 'r'})

        });
        console.log(this.state.climbers.map(climber => climber.name), this.state.climbers.map(climber => climber.level))
    }

    render() {
        var climbers = _.map(this.state.climbers, (climber) => {

            return <li>{climber.id} {climber.name} {climber.level} {climber.place} </li>
        })
        return (
            <div>
                <input ref="textBox" type="text"/>
                <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => {
                    this.clicked()
                }}>TEST
                </Button>
                {/*<Vide parentCallback={this.callbackFunction}/>*/}
                <p>essai</p>
                <p>{climbers}</p>
                {/*<Vide/>*/}
            </div>
        )
    }
}

export default Climber;
