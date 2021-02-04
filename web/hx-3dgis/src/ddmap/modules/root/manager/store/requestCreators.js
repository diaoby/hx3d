import Request from '../../../../utils/Request'
import ActionCreators from './actionCreators'
//所有请求的axios 都放在这里
export default class RequestCreators {

    //园区后端服务---上线后需要修改对应ip和端口
    static SERVIER = {
        serverIp:'localhost',
        serverPort:8082
    };

    static GET_URL = (api)=>{
        return 'http://' + RequestCreators.SERVIER.serverIp +':' + RequestCreators.SERVIER.serverPort + api
    }

    static TODO_LIST_GET_LIST_REQUEST= ()=>{
        return (dispatch)=>{
            let url = RequestCreators.GET_URL('/hx3d/web/home/energytest/getlist');
            Request.get(url, 
                { asyn: true }, 
                (data)=>{
                    const action = ActionCreators.TODO_LIST_GET_LIST_ACTION(data)
                    dispatch(action)
                },
                this
            );
        }
    }

    //园区概况api
    static PARK_INFO_GET_INFO_REQUEST= ()=>{
        return (dispatch)=>{
            let url = RequestCreators.GET_URL('/hx3d/web/home/partinfo/getpartinfo');
            Request.get(url, 
                { asyn: true }, 
                (data)=>{
                    const action = ActionCreators.PARK_INFO_GET_INFO_ACTION(data)
                    dispatch(action)
                },
                this
            );
        }
    }
    
}