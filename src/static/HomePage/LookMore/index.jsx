import React, { Component } from 'react';
import Book from './../../../img/book.png';
class LookMore extends Component {

    render() {
        return (
            <div>
                <img src={Book} alt='' className="icon_book"/>
                <p className='ListMore'>更多课程，尽情期待</p>
            </div>
        );
    }

}

export default LookMore;
