import React, {Component} from 'react';
import './app.css';
import Clock from './clock';
import Stopwatch from './stopwatch';

class App extends Component {

    render() {
        return (
            <div className="app">
                <div>
                    <Clock />
                </div>
                <div>
                    <Stopwatch />
                </div>
            </div>
        )
    }
}

export default App;