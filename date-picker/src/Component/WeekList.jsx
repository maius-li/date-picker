import React, { Component } from 'react';

class WeekList extends Component {

    render() {
        const weekList = ['日', '一', '二', '三', '四', '五', '六'];

        return (
            <div className="week-wrap">
                {weekList.map((item, index) => {
                    return(
                        <span key={index}>
                            {item}
                        </span>
                    )
                })}
            </div>

        );
    }
}

export default WeekList;