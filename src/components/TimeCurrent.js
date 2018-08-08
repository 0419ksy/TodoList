import React, { Component } from 'react';
import Time from '../../node_modules/react-time';
import './TimeCurrent.css';

class TimeCurrent extends Component {
    render() {
        let now = new Date()
        
        return (
            <div className="time-app">
                <p className="time-text"><Time value={now} format="YYYY/MM/DD" /></p>
            </div>
        );
    }
}

export default TimeCurrent;