import React, { Component } from 'react';
import Month from '../Component/Month';

class DatePickerContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth() + 1,
            days: []
        }
    }

    handleClickBeforeYear = () => {
        const date = new Date();
        date.setFullYear(this.state.currentYear - 1);
        this.setState({currentYear: date.getFullYear()});
    }

    handleClickAfterYear = () => {
        const date = new Date();
        date.setFullYear(this.state.currentYear + 1);
        this.setState({currentYear: date.getFullYear()});
    }

    handleClickBeforeMonth = () => {
        const date = new Date();
        date.setMonth(this.state.currentMonth - 1);
        this.setState({currentMonth: date.getMonth()});
    }

    handleClickAfterMonth = () => {
        const date = new Date();
        date.setMonth(this.state.currentMonth + 1);
        this.setState({currentMonth: date.getMonth()});
    }

    render() {
        const { currentYear, currentMonth } = this.state;
        const beforeMonth = '<';
        const afterMonth = '>';
        const beforeYear = '<<';
        const afterYear = '>>';
        const formatMonth = currentMonth.toString().length === 1 ? `0${currentMonth}`: currentMonth;
        const date = `${currentYear}/${formatMonth}/01`;

        return (
            <div className="container-wrap">
                <div className="title">
                    <span onClick={this.handleClickBeforeYear}>{beforeYear}</span>
                    <span onClick={this.handleClickBeforeMonth}>{beforeMonth}</span>
                    {currentYear} - {currentMonth}
                    <span onClick={this.handleClickAfterMonth}>{afterMonth}</span>
                    <span onClick={this.handleClickAfterYear}>{afterYear}</span>
                </div>
                
                <Month
                    date={new Date(date)}
                />
            </div>
        );
    }
}

export default DatePickerContainer;