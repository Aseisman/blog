// action
const RouteFlagAction =(RouteFlag)=>{
    //action对象
    return {
        type:"sendRouteFlag",
        RouteFlag:RouteFlag
    };
}
module.exports={
    RouteFlagAction
}