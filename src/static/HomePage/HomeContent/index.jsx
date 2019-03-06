import React, { Component } from 'react';
import LookMore from './../LookMore';
import Date from './../../../img/date.png';
import Hourglass from './../../../img/hourglass.png';
import HourglassO from './../../../img/hourglass1.png';
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
},{
    imgurl:'http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg',
    title:'中小学生西班牙语特训营',
    odds:'开学特惠季',
    newprice:'1244',
    oldprice:'3999',
    orstart:false,
    courseNum:'345',
    discount:'8',
    period : '2019.10.01-2020.01.02',
}]
class HomeContent extends Component {

    render() {
        const InfoList = DataList.map((data,index)=>{
            return(
                <div className="CourseLi" key={index}>
                    <div className="CourseTop">
                        <div className="CourseTopLeft">
                            <img src={data.imgurl} alt="" className='CourseImg'/>
                        </div>
                        <div className="CourseTopRight">
                            <p className="CourseInfo">{data.title}</p>
                            <p className="CourseInfo">{data.odds}</p>
                            <p className="CourseInfo"><span className="NowPrice">￥{data.newprice}</span><span className="OldPrice">￥{data.oldprice}</span><span className="timelimit">限时{data.discount}折</span></p>
                        </div>
                    </div>
                    <div className="CourseBottom">
                        <span>
                            <img src={Date} alt="" className="icon_date"/>
                            <span className='BottomTime'>课时数：</span><span className="BottomInfo">{data.courseNum}课时</span>
                        </span>
                        <span style={{float:'right'}}>
                            {
                                data.orstart?<img src={Hourglass} alt="" className="icon_hour"/>:
                                <img src={HourglassO} alt="" className="icon_hour"/>
                            }

                            <span className='BottomTime'>有效期：</span><span className="BottomInfo">{data.period}</span>
                        </span>
                    </div>
                </div>
            )
        })
        return (
            <div className="Home_Content">
                {InfoList}
                <LookMore />
            </div>
        );
    }

}

export default HomeContent;
