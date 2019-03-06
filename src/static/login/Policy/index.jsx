import React, { Component } from 'react';
import Icon_cha from './../../../img/icon_cha.png';
class Policy extends Component {

    render() {
        return (
            <div className='policy'>
                <div className="policy-content">
                    <div className="policy-header">用户隐私政策</div>
                    <div className="policy-text">
                        <p>概述</p>
                        <p> 佳课教育（“我们”）将保护用户隐私作为一项基本政策。您在使用我们的产品与/或服务时，我们可能会收集和使用您的相关信息。本隐私政策将向您说明我们如何收集、使用、保存、共享和转让这些信息。如您正在使用我们的关联公司、合作伙伴/机构之产品或服务的，则本政策同样适用于该部分产品或服务</p>
                        <p>本政策将帮助您了解以下内容：</p>
                        <p> 一、我们如何收集、使用您的个人信息 </p>
                        <p>二、我们如何使用Cookie、Beacon等同类技术 </p>
                        <p>三、我们如何共享、转让、公开披露您的个人信息</p>
                        <p>四、我们如何存储和保护个人信息</p>
                        <p>五、您如何管理您的个人信息 </p>
                        <p> 六、本政策的适用和修订</p>
                        <p>七、关于未成年人信息的保护 </p>
                        <p>八、术语释义</p>
                    </div>
                </div>
                <img src={Icon_cha} alt="" className="icon-cha" onClick={()=>this.props.ClosePolicy()}/>
            </div>
        );
    }
}
export default Policy;
