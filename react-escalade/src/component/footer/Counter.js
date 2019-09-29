import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

//     ajout d'un call back pour etre sur que dans la console on est bien la meme valeur
//     que ici
//     si on veut changer les setstate bien faire le callback

    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('callback value', this.state.count)
        })
        // console.log(this.state.count )
    }

    incrementBis() {
        this.setState((previousState) => ({
                count: previousState.count + 1
            }), () => {
                console.log(this.state.count)
            })
    }

    increment5() {
        this.incrementBis();
        this.incrementBis();
        this.incrementBis();
        this.incrementBis();
        this.incrementBis();
    }

    render() {
        return (
            <div>
                count : {this.state.count}
                <button onClick={() => {
                    this.increment5()
                }}>Increment
                </button>
            </div>
        );
    }

}

// Counter.propTypes = {};

export default Counter;
