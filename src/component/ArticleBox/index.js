import React from 'react'
import "./index.css"
import {timestampToTime} from "../../utils/utils"
export default class ArticleBox extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     photo:photo,
        //     title:"2020-2021年Web前端最新导航-前端学习资源分享",
        //     desc:"可以显著提升开发效率的前端导航连接",
        //     view:"416",
        //     comment:5,
        //     like:5,
        //     create_time:"2020-10-07 11:51:50"
        // };
        this.state=this.props.article;
        this.state.img_url="https://pics0.baidu.com/feed/55e736d12f2eb938a8173ec982770d32e5dd6fab.jpeg?token=c51b86009ed92fbae6c4071d3a8774e4";
    }
    render(){
        return (
                <div className="box" onClick={this.props.onClick}>
                   <div className="content">
                        <div className="title">
                            {this.state.title}
                        </div>
                        <div className="desc">
                            {/* 文字描述 */}
                            {this.state.desc}
                        </div>
                        <div className="comment">
                            {/* 查看 评论 赞 日期 */}
                            查看 {this.state.meta.views} 评论 {this.state.meta.comments} 赞 {this.state.meta.likes} {timestampToTime(this.state.create_time,true)}
                        </div>
                   </div>
                   <img src={this.state.img_url} alt="图片" className="box-photo"></img> 
                </div>
        )
    }
}