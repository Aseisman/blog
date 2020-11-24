import React from 'react';
import NavBar from "../component/NavBar/NavBar"
//store
import store from "../store/index"

//action
import {RouteFlagAction} from "../store/action/RouteFlagAction"

import {withRouter} from "react-router"

class Home extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         RouteFlag:0
    //       };
    // }
    componentDidMount(){
        store.subscribe(()=>{
            // console.log(store.getState());
            this.setState(store.getState());
        })

        setTimeout(()=>{
            if(this.props.location.pathname==="/message"){
                const action = RouteFlagAction(1);
                store.dispatch(action);
            }else if(this.props.location.pathname==="/about"){
                const action = RouteFlagAction(2);
                store.dispatch(action);
            }
        })
    }
    routeChange(i){
        // console.log(i);
        // console.log(this.props.location);
        const action = RouteFlagAction(i);
        store.dispatch(action);
    }
    render(){
        return(
            <div>
                <div style={{height:"6rem"}}>
                    <NavBar RouteFlag={store.getState().RouteFlag} routeChange={(i)=>this.routeChange(i)}></NavBar>
                </div>

                { this.props.children}
            </div>
        )
    }
}
export default withRouter(Home);