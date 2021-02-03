import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
export default class Request{
    static get(url,config,callback,scope){
        axios.get(url,config).then((res)=>{
            if(callback!=null){
                callback.call(scope,res.data);
            }
        });
    };
    static post(url,params,config,callback,scope){
        axios.post(url,params,config).then((res)=>{
            if(callback!=null){
                callback.call(scope,res.data);
            }
        });
    };
};