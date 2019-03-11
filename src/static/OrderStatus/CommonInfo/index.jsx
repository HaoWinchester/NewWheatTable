import React, { Component } from 'react';
import Video from './../../../img/video.png';
import Table from './../../../img/table.png';
import HourG from './../../../img/zhongya.png';
import Student from './../../../img/student.png';
const DataList = [{
    imgurl:'http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg',
    title:'中小学生西班牙语特训营',
    odds:'开学特惠季',
    newprice:'1244',
    oldprice:'3999',
    orstart:true,
    discount:'9',
    courseNum:'345',
    period : '报班即学，有效期90天',
}]
class CommonInfo extends Component {

    render() {
        const InfoList = DataList.map((data,index)=>{
            return(
                <div className="PayOrder" key={index}>
                    <div className="CourseTopLeft">
                        <img src={data.imgurl} alt="" className='CourseImg'/>
                    </div>
                    <div className="CourseTopRight">
                        <p className="CourseInfo">{data.title}</p>
                        <p className="CourseInfo">{data.odds}</p>
                        <p className="CourseInfo"><span className="NowPrice">￥{data.newprice}</span><span className="OldPrice">￥{data.oldprice}</span></p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {InfoList}
                <div className="CourseTitle" style={{marginTop:'10px'}}>
                    <div className="CourseName">
                        <span className="BoldTitle">英语特惠期，即报即学[开学季]</span>
                        <span className="timelimit">限时9折</span>
                    </div>
                    <div className="CourseTxt">报班即学，家长眼中最好的语文课程，一门课让孩子爱上语文！</div>
                    <div className="CourseBottom">
                        <span>
                            <img src={Table} alt="" className="icon_date"/>
                            <span className='BottomTime'>课时数：</span><span className="BottomInfo">541课时</span>
                        </span>
                        <span style={{float:'right'}}>
                            <img src={Video} alt="" className="icon_video"/>
                            <span className='BottomTime'>授课模式：</span><span className="BottomInfo">直播+录播课</span>
                        </span>
                    </div>
                    <div className="CourseBottom">
                        <span style={{width:'100%'}}>
                            <img src={Student} alt="" className="icon_date"/>
                            <span className='BottomTime'>适合年级：</span><span className="BottomInfo">一年级/二年级/三年级</span>
                        </span>
                    </div>
                    <div className="CourseBottom">
                        <span style={{width:'100%'}}>
                            <img src={HourG} alt="" className="icon_date"/>
                            <span className='BottomTime'>有效期：</span><span className="BottomInfo">报班即学，有效期123天</span>
                        </span>
                    </div>
                    <div className="trait">
                        <span>系统化学习</span>
                        <span>24H内答疑</span>
                        <span>作业批改</span>
                        <span>资料下载</span>
                        <span>全程监督</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default CommonInfo;
