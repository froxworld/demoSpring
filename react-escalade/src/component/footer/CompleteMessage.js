import React, {Component} from 'react';


class CompleteMessage extends Component {

    constructor({message, date, info, climberName, topic}) {
        super();
        this.state ={

            message:message,
            date:date,
            info:info,
            climber:climberName,
            topic:topic
        }

    }

    render() {
        return (
            <div>
                VOILA {this.state.message}
            </div>
        );
    }
}


export default CompleteMessage;
