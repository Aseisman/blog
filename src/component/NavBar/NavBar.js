import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"
import navphoto from "../../static/img/timg.jpg" 
//store
// import {store} from "../../store/index"

//action
// import {RouteFlagAction} from "../../store/action/RouteFlagAction"


export default class NavBar extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         RouteFlag:0
    //       };
    // }
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         console.log(store.getState());
    //         this.setState({});
    //     })
    // }
    // routeChange(i){
    //     console.log(i);
    //     const action = RouteFlagAction(i);
    //     store.dispatch(action);
    //     // this.setState({
    //     //     RouteFlag:i
    //     // })
    // }
    render(){
        return (
            <div className="nav-bar">
                <div className="nav-img-box">
                    <img src={navphoto} alt="导航图片" className="nav-img"/>
                </div>
                <ul id="ul-bar">
                    <li onClick={()=>this.props.routeChange(0)} className={this.props.RouteFlag===0?'li-active':null}>
                        <NavLink exact to={{pathname:"/"}} className="flexType">
                            首页
                        </NavLink>
                    </li>
                    <li onClick={()=>this.props.routeChange(1)} className={this.props.RouteFlag===1?'li-active':null}>
                        <NavLink exact to={{pathname:"/message"}}  className="flexType">
                            留言
                        </NavLink>
                    </li>
                    <li onClick={()=>this.props.routeChange(2)} className={this.props.RouteFlag===2?'li-active':null}>
                        <NavLink exact to={{pathname:"/about"}} className="flexType">
                            关于
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}