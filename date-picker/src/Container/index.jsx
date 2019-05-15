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

    render() {
        const { currentYear, currentMonth } = this.state;

        return (
            <div className="container-title-wrap">
                {currentYear} - {currentMonth}
                
                <Month
                    date={new Date('2019/05/01')}
                />
            </div>
        );
    }
}

export default DatePickerContainer;