import React, { Component } from 'react';

class Minute extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        let minutes = [];

        for (let minute = 0; minute < 60; minute += 1) {
            minutes.push(<option value={minute}>{minute}</option>);
        }

        return (
            <select>
                {minutes}
            </select>

        );
    }
}

export default Minute;