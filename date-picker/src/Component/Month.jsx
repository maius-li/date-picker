import React, { Component } from 'react';
import Day from './Day';
import WeekList from './WeekList';
import Hour from './Hour';
import Minute from './Minute';

class Month extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dayList: []
        }
    }

    componentDidMount() {
        this.initializeDays();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps !== this.props) {
            this.initializeDays();
        }

        return true;
    }

    initializeDays = () => {
        const { date } = this.props;
        const year = date.getFullYear();
        const month = date.getMonth();
        const nextMonth = month + 1;
        const lastestDateInMonth = new Date(year, nextMonth, 0);
        const dayList = [];

        for (let day = 1; day <= lastestDateInMonth.getDate(); day++) {
            dayList.push(new Date(year, month, day));
        }

        this.setState({ dayList: dayList });
    }

    handleClick = (date) => {
        this.setState({
            selectedDay: date
        })
    }

    getDays = () => {
        const days = [];

        for (const dayIndex in this.state.dayList) {
            days.push(
                <Day
                    key={dayIndex}
                    day={this.state.dayList[dayIndex]}
                    handleClick={(date) => { this.handleClick(date); }}
                />
            )
        }

        return days
    }

    render() {
        const selectedDay = this.state.selectedDay ? this.state.selectedDay.toLocaleDateString() : '';

        return (
            <div className="month-container">
                <input
                    type="text"
                    value={selectedDay}
                />
                <Hour />
                <Minute />

                <WeekList />
                <div className="month-content">{this.getDays()}</div>
            </div>
        );
    }
}

export default Month;