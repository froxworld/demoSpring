import React from 'react';
import './App.css';
import 'typeface-roboto';

import Route from "./component/mainContent/Route";
import HeaderCenter from "./component/header/HeaderCenter";
import Footer from "./component/footer/Footer";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: "",
            climberName: "",
            place: "",
            showMyComponent: false
        }
    }

    addName() {
        this.setState({climberName: this.refs.climberNameBox.value})
        console.log("app addName" + this.state.climberName)
    }

    addRoute() {
        this.setState({rout: this.refs.climberRouteBox.value})
        console.log("app addRoute" + this.state.route)
    }

    addPlace() {
        this.setState({rout: this.refs.climberPlaceBox.value})
        console.log("app addRoute" + this.state.place)
    }


    render() {
        return (
            <div>
                <header className="header">
                    <HeaderCenter/>
                    <div>


                        <button onClick onClick={(e) => {
                            this.addName()
                        }}>Climber Name
                        </button>

                        <input ref="climberNameBox" type="text"/>

                        <button onClick1 onClick={(e) => {
                            this.addRoute()

                        }}>Climber Route
                        </button>

                        <input ref="climberRouteBox" type="text"/>

                        <button onClick1 onClick={(e) => {
                            this.addPlace()

                        }}>Climber Place
                        </button>
                        <input ref="climberPlaceBox" type="text"/>

                    </div>
                </header>
                <sideNav>
                </sideNav>
                <mainContent>
                    <Route>{this.state.climberName}{this.state.rout}{this.state.place}{this.state.showMyComponent = true}</Route>
                </mainContent>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }

}


export default App;
