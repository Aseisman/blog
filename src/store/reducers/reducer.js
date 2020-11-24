const initState={
    RouteFlag:0
}
const reducer =(state=initState,action)=>{
    switch(action.type){
        case "sendRouteFlag":
            return Object.assign({},state,action);
        default:
            return state;
    }
};

export default reducer
