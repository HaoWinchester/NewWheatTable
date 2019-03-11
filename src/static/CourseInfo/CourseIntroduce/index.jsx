import React, { Component } from 'react';
import Video from './../../../img/video.png';
import Table from './../../../img/table.png';
import HourG from './../../../img/zhongya.png';
import Student from './../../../img/student.png';
import CourseTable from './../../../img/CourseTable.png';
import Back from './../../../img/back.png';
// import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
class CourseIntroduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lookmoreStatus : false,
            lookmore : '查看更多'
        };
    }
    componentDidMount(){
        // var mySwiper = new Swiper('.swiper-container', {
        //    slidesPerView : 3,
        //    spaceBetween : 20,
        // })
    }
    LookMoreDetail = ()=>{
        this.setState({
            lookmoreStatus : !this.state.lookmoreStatus,
            lookmore : this.state.lookmoreStatus?'查看更多':'收起'
        });
    }
    render() {
        let {lookmoreStatus,lookmore} = this.state;
        return (
            <div className="CourseContentInfo">
                <div className="CourseTitle">
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
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>课程详情</p>
                    <img src={CourseTable} alt="" className="CourseTable"/>
                    <p className="DetailTxt">不仅仅是交流、表达的工具，更应该是与伟大先人沟通，塑造历史视野，培养人文情怀的媒介。 大语文的学习立足于培养、熏陶美好的情感、情操，塑造完美的个性品质，帮助学生形成良好的思维方式，发展可支持终身学习的能力。 学习大语文的目标：让孩子“爱上语文，做有修养的人”，拥有“渊博——自信一生”。</p>
                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>适合对象</p>
                    <p className="DetailTxt">1.小学六年级以上、初一、初二学生；</p>
                    <p className="DetailTxt">2.基础薄弱或在学习中遇到瓶颈的学生；</p>
                    <p className="DetailTxt"> 3.有小升初、中考、高考压力的学生；</p>
                    <p className="DetailTxt"> 4.目标为重点中学、名牌大学的学生。</p>
                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>学习目标</p>
                    <p className="DetailTxt">1.通过文学经典熏陶，提升孩子语文学习兴趣；</p>
                    <p className="DetailTxt">2.愿意主动学习语文，积累更多文学知识；</p>
                    <p className="DetailTxt">3.开阔视野，塑造品格，提升文学欣赏能力；</p>
                    <p className="DetailTxt">4.写作条理清晰，表达真情实感，热爱阅读，精准 概括文章内容，提炼中心思想；</p>
                    <p className="DetailTxt">5.爱上语文，做一个有修养的人。</p>

                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>师资介绍</p>
                    <div className="ImgList">
                        <div className="SignImg">
                            <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg"
                                 alt=""
                                 className="TeacherImg"/>
                            <p style={{textAlign:'center'}}>王天一</p>
                        </div>
                        <div className="SignImg">
                            <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg"
                                 alt=""
                                 className="TeacherImg"/>
                            <p style={{textAlign:'center'}}>王天一</p>
                        </div>
                        <div className="SignImg">
                            <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg"
                                 alt=""
                                 className="TeacherImg"/>
                            <p style={{textAlign:'center'}}>王天一</p>
                        </div>
                        <div className="SignImg">
                            <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg"
                                 alt=""
                                 className="TeacherImg"/>
                            <p style={{textAlign:'center'}}>王天一</p>
                        </div>
                    </div>
                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>课程安排</p>
                    <p className="DetailTxt">1.每堂课20-40分钟不等；</p>
                    <p className="DetailTxt">2.学生购买课程后，在课程有效期内可反复学习。</p>
                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>使用教材</p>
                    <p className="DetailTxt">本套课程免费赠送全套纸质教材（共9本）：</p>
                    <p className="DetailTxt">1.全套8册大语文课本（3-6年级）。</p>
                    <p className="DetailTxt">2.小升初语文一本通1本。</p>
                    <p className="DetailTxt">配送事宜：</p>
                    <p className="DetailTxt"> 成功报课后，在班级申领赠书去申领，我们将快递寄送给您。</p>
                    <p className="DetailTxt">教材特色： </p>
                    <p className="DetailTxt"> 体系完整：涵盖中外文学史上重要作家，作品。</p>
                    <p className="DetailTxt"> 形式有趣：海量原创漫画，全彩色印刷，语言亲切俏皮</p>
                </div>
                <div className="CourseDetails">
                    <p className="CourseDetailTitle"><span className="shu"></span>退还班政策</p>
                    <p className="DetailTxt">一、换班政策</p>
                    <p className="DetailTxt">• 换班规则：自课程开班之日起（除短期班的课程外）一个月内可接受换班申请，课程开班时间超过一个月不予换班。</p>
                    <p className="DetailTxt"> • 短期班换班规则：纯录播课或课程中含录播课的短期班课程（短期班指课时数为45课时，含45课时）自课程开班之日起15天内可接受换班申请；纯直播课课程或纯直播短期班课程（短期班指课时数为10课时，含10课时）自课程开班之日起15天内可接受换班申请。</p>
                    {
                        lookmoreStatus&&<p className="DetailTxt">123333333333333333</p>
                    }
                    <p className="DetailMore" onClick={()=>this.LookMoreDetail()}> {lookmore}</p>
                    <p className="DetailMore" onClick={()=>this.LookMoreDetail()}> <img src={Back} alt="" style={{width:'13px'}}/></p>
                </div>
                <div className="PriceExplain">
                    <p className="PriceTitle">—价格说明—</p>
                    <p className="PriceTent">划线价：指商品的新麦教育指导价、合作方提供的建议零售价，划线价并非原价，仅供参考。</p>
                    <p className="PriceTent">未划线价格：指商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或使用优惠券、学币、卡券等发生变化，最终以订单结算页价格为准。</p>
                    <p className="PriceTent">小贴士：此说明仅当出现价格比较时有效。因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现商品标价或促销信息有异常，请您立即联系我们，我们会及时补正。新麦教育祝您学习愉快！</p>
                </div>
            </div>
        );
    }

}

export default CourseIntroduce;
