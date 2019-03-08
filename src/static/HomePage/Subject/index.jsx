import React, { Component } from 'react';
const GradeList = ['1','2','3','4','1','2','1','2','1','2','1','2','1','2','1','2','1','2','1','2']
class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexNum : null
        };
    }
    ActiveGrade = (index)=>{
        this.setState({
            indexNum : index
        });
    }
    MakeSureSub = ()=>{
        this.props.CloseSubList();  
    }
    render() {
        let {indexNum}= this.state;
        const gr = GradeList.map((data,index)=>{
             // eslint-disable-next-line
            if(indexNum==index){
                return(
                    <span className='grades' key={index} onClick={()=>this.ActiveGrade(index)}>{data}</span>
                )
            }else{
                return(
                    <span className='grade' key={index} onClick={()=>this.ActiveGrade(index)}>{data}</span>
                )
            }

        })
        return (
            <div className="GradeList">
                <p className="SelectGradeTitle">请选择课程:</p>
                <div className="grade-list">
                    {gr}
                </div>
                <div className="GradeMakeSure" onClick={()=>this.MakeSureSub()}>确定</div>
            </div>
        );
    }

}

export default Subject;
