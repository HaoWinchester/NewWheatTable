import React, { Component } from 'react';
import circlu from './../../../img/circlu.png';
import top_cir from './../../../img/top_cir.png';
class Screen extends Component {

    OpenGrade = ()=>{
        this.props.ToggleGradeList();
    }
    OpenSubject = ()=>{
        this.props.ToggleSubList();
    }
    render() {
        let {gradeCir,subject} = this.props;
        return (
            <div className="Screen_list">
                <span style={{marginLeft:"5%"}}>筛选：</span>
                <span className="Screen_ways" id={gradeCir?"GrColor":''}  onClick={()=>this.OpenGrade()}>年级<img src={gradeCir?top_cir:circlu} alt="" className="icon_circlu"/></span>
                <span className="Screen_ways" id={subject?"GrColor":''} onClick={()=>this.OpenSubject()}>科目<img src={subject?top_cir:circlu} alt="" className="icon_circlu"/></span>
            </div>
        );
    }

}

export default Screen;
