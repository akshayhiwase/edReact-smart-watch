import React, { Component } from 'react';
import Timecss from './time.module.css'

class Timer extends Component {
    state = { date: new Date() }

    getTime() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    render() {
        return (
            <div className={Timecss.timer_section}>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                {this.getTime()}
            </div>
        );
    }
}

export default Timer;