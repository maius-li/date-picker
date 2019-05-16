import React, { Component } from 'react';

class Hour extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        let hours = [];

        for (let hour = 0; hour < 24; hour += 1) {
            hours.push(<option value={hour}>{hour}</option>);
        }

        return (
            <select>
                {hours}
            </select>

        );
    }
}

export default Hour;