import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Screen from './Screen';
import HomeContent from './HomeContent';
import HomeBottom from './HomeBottom';
import ExitAccount from './ExitAccount';
import Grade from './Grade';
import Subject from './Subject';
import './index.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ExitStatus:false,
            overflow:'auto',
            showGrade : false,
            showSub : false,
            gradeCir : false,
            subject : false
        };
    }
    OpenExitAccount = ()=>{
        this.setState({
            ExitStatus : true,
            overflow : 'hidden',
        });
    }
    CloseExitAccount = ()=>{
        this.setState({
            ExitStatus : false,
            overflow : 'auto',
        });
    }
    ToggleGradeList = ()=>{
        this.setState({
            showGrade : !this.state.showGrade,
            gradeCir : !this.state.gradeCir,
            showSub : false,
            subject : false
        });
    }
    ToggleSubList = ()=>{
        this.setState({
            showSub : !this.state.showSub,
            subject : !this.state.subject,
            showGrade : false,
            gradeCir : false
        });
    }
    CloseGradeList = ()=>{
        this.setState({
            showGrade : false,
            gradeCir : false
        });
    }
    CloseSubList = ()=>{
        this.setState({
            showSub : false,
            subject : false
        });
    }
    render() {
        let {ExitStatus,overflow,showGrade,gradeCir,subject,showSub} = this.state;
        return (
            <div style={{background:'rgba(244,245,249,1)',height:'100vh',overflow:overflow}}>
                <HomeHeader OpenExit={()=>this.OpenExitAccount()}/>
                <Screen
                    ToggleGradeList={()=>{this.ToggleGradeList()}}
                    ToggleSubList={()=>{this.ToggleSubList()}}
                    gradeCir={gradeCir}
                    subject={subject}/>
                <HomeContent />
                <HomeBottom />
                {
                    ExitStatus&&<ExitAccount CloseExit={()=>this.CloseExitAccount()}/>
                }
                {
                    showGrade&&<Grade CloseGradeList={()=>this.CloseGradeList()}/>
                }
                {
                    showSub&&<Subject CloseSubList={()=>this.CloseSubList()}/>
                }
            </div>
        );
    }

}

export default HomePage;
