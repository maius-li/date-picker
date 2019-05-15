import React, { Component } from 'react';

class Day extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    getClassName = () => {
        let className = 'day'

        className += ` day-${this.props.day.getDay()}`

        return className;
    }

    render() {
        const leftPadSpans = [];
        if (this.props.day.getDate() === 1) {
            for (let day = 0; day < this.props.day.getDay(); day += 1) {
                leftPadSpans.push(<span />);
            }
        }

        return (
            <React.Fragment>
                {leftPadSpans}
                <span
                    className={this.getClassName()}
                    onClick={() => {
                        this.props.handleClick(this.props.day);
                    }}>
                    <b>{this.props.day.getDate()}</b>
                </span>
            </React.Fragment>
        );
    }
}

export default Day;