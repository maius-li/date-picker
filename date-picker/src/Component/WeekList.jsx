import React, { Component } from 'react';

class WeekList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { day } = this.props;
        const weekList = ['日', '一', '二', '三', '四', '五', '六'];

        return (
            <div>
                {weekList.map((item, index) => {
                    return(
                        <span>
                            {item}
                        </span>
                    )
                })}
            </div>

        );
    }
}

export default WeekList;