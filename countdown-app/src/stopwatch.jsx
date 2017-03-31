import React, {Component} from 'react';
import './app.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 0,
            newCountdown: 0
        }
    }

    changeStopwatchDeadline() {
        this.setState({countdown: this.state.newCountdown});
        let countdownInterval = setInterval(() => {
            var countdown = this.state.countdown - 1;
            if(countdown <= 0) {
                clearInterval(countdownInterval);
                alert("Countdown finished!");
            }
            this.setState({countdown});
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className="app-title">
                    Countdown
                </div>
                <div>{this.state.countdown}</div>
                <Form inline>
                    <FormControl placeholder="Stopwatch Time" onChange={(event) => this.setState({newCountdown: event.target.value})}/>
                    <Button onClick={() => this.changeStopwatchDeadline()}>Submit</Button>
                </Form>
            </div>

        );
    }
}

export default Stopwatch;