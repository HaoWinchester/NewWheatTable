import React, { Component } from 'react';

class CourseFoot extends Component {

    render() {
        return (
            <div className="CourseFoot">
                <div className="FooterLeft">
                    <span className="NewPrice">
                        ￥4399
                    </span>
                    <span className="OldPrice">
                        ￥4309
                    </span>
                </div>
                <div className="FooterRight">
                    立即购买
                </div>
            </div>
        );
    }

}

export default CourseFoot;
