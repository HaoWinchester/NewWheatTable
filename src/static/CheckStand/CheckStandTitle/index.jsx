import React, { Component } from 'react';
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
class CheckStandTitle extends Component {

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
                        <p className="CourseInfo"><span className="NowPrice">￥{data.newprice}</span><span className="OldPrice">￥{data.oldprice}</span><span className="timelimit">限时{data.discount}折</span></p>
                    </div>
                </div>
            )
        })
        return (
            <div style={{background:"#fff"}}>
                <p className="PayTimeTip">请在<span style={{color:'#FF4E4E'}}>15分钟</span>内完成支付，否则订单将自动取消</p>
                {InfoList}
                <p className="PayTimeMoney">需付款:<span style={{fontSize:'15px',color:'#FF4E4E'}}>￥1233</span></p>
            </div>
        );
    }

}

export default CheckStandTitle;
