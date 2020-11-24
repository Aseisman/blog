import {request} from "./https"

const url={
    //文章列表
    articlesList:(data)=>{
        return request('/api/articles/find','get',data);
    },
    //文章详情
    articleDetail:(data)=>{
        return request("/api/articles/findOne",'get',data);
    },
    //标签列表
    tagList:()=>{
        return request('/api/tags/all','get',"");
    },
}

export default url;
