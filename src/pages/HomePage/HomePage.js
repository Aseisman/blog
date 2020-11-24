import React from "react"
import "./HomePage.css"
import ArticleBox from "../../component/ArticleBox/index"
import photo from "../../static/img/timg.jpg"
import axios from "../../utils/url"

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            req:{
                pageNum:1,
                pageSize:10
            },
            articleList:[],
            tagList:[]
        }
    }
    
    componentDidMount(){
        axios.articlesList(this.state.req).then(res=>{
            console.log(res);
            this.setState({
                articleList:res.data.list
            })
        })
        axios.tagList().then(res=>{
            this.setState({
                tagList:res.data
            })
        })
    }
    gotoDetail(){
        console.log("查看内容");
    }
    render(){
        let tags=this.state.tagList.map((item,index)=>{
            return(
            <div key={index}>{item.name}</div>
            )
        })
        //生成文章列表函数
        let list=this.state.articleList.map((item,index)=>{
            return(
                <ArticleBox key={index} article={item} onClick={(index)=>this.gotoDetail(index)}></ArticleBox>
            )
        })
        return  (
            <div style={{display: "flex",flexWrap: "wrap-reverse"}}>
                <div className="articleList">
                    {/* 左 */}
                    {list}
                </div>
                <div className="right">
                    {/* 右 */}
                    <div className="avatar-box">
                        <img src={photo} className="avatar" alt="不行不行先上课"/>
                        不行不行先上课
                    </div>
                    <div className="labels-box">
                        <p className="labels-title">标签云</p>
                        <div className="labels">
                            {tags}
                            {/* <div>数据结构与算法</div>
                            <div>vue.js</div>
                            <div>浏览器内核</div>
                            <div>Nodejs</div>
                            <div>react</div>
                            <div>express</div>
                            <div>mongodb</div>
                            <div>ES6</div>
                            <div>vue.js</div>
                            <div>vue.js</div>
                            <div>vue.js</div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;