import React, {Component} from 'react';
import './app.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "December 25, 2017",
            newDeadline: "",
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentWillMount () {
        this.getTimeUntil(this.state.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline, newDeadline: ""});
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/1000/60/60) % 24);
        const days = Math.floor(time/1000/60/60/24);

        this.setState({days, hours, minutes, seconds}); //ES6 trick to set {days: days, hours:hours, etc.}
    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div>
                <div className="app-title">
                    Countdown to {this.state.deadline}
                </div>
                <div>
                    <div className="clock-days">{this.leadingZero(this.state.days)} days</div>
                    <div className="clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                    <div className="clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                    <div className="clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
                </div>
                <Form inline>
                    <FormControl placeholder="New Date" onChange={(event) => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Clock;