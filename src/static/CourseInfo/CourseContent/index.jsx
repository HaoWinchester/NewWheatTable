import React, { Component } from 'react';
import CourseInfoStatus from './../CourseInfoStatus';
import CourseIntroduce from './../CourseIntroduce';
class CourseContent extends Component {

    render() {
        return (
            <div>
                <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg"
                     alt=""
                     className="CourseIngoImg"/>
                 <CourseInfoStatus />
                 <CourseIntroduce />
            </div>
        );
    }

}

export default CourseContent;
