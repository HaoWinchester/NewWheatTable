import React, { Component } from 'react';
import Headers from './../HomePage/HomeHeader';
import CourseContent from './CourseContent';
import CourseFoot from './CourseFoot';
import './index.css';
class CourseInfo extends Component {

    render() {
        return (
            <div>
                <Headers />
                <CourseContent />
                <CourseFoot />
            </div>
        );
    }

}

export default CourseInfo;
