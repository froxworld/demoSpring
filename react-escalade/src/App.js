import React from 'react';
import './App.css';
import 'typeface-roboto';

import Route from "./component/mainContent/Route";
import HeaderCenter from "./component/header/HeaderCenter";
import {Footer} from "./component/footer/Footer";
import FunctionButton from "./component/header/FunctionButton";
import ClassButton from "./component/header/ClassButton";
import Message from "./component/footer/Message";
import Counter from "./component/footer/Counter";


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
        this.setState({route: this.refs.climberRouteBox.value})
        console.log("app addRoute" + this.state.route)
    }

    addPlace() {
        this.setState({place: this.refs.climberPlaceBox.value})
        console.log("app addPlace" + this.state.place)
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

                        <button onClick onClick={(e) => {
                            this.addRoute()

                        }}>Climber Route
                        </button>

                        <input ref="climberRouteBox" type="text"/>

                        <button onClick onClick={(e) => {
                            this.addPlace()

                        }}>Climber Place
                        </button>
                        <input ref="climberPlaceBox" type="text"/>

                    </div>
                </header>
                {/*<SideNav>*/}
                {/*</SideNav>*/}
                {/*<mainContent>*/}
                {/*<Route>{this.state.climberName}{this.state.route}{this.state.place}</Route>*/}
                <Route climberName={this.state.climberName}
                       route={this.state.route}
                       place={this.state.place}/>
                {/*</mainContent>*/}
                <div>
                    <FunctionButton name={"c1"}><button>click</button><p>test 2</p></FunctionButton>
                    <FunctionButton name={"c2"}><p>test 1</p></FunctionButton>
                    <ClassButton name={"name "}><p>test class</p></ClassButton>
                    <Counter/>
                    <Message/>
                    <Footer/>
                </div>
            </div>
        );
    }

}


export default App;
