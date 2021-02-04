import Request from '../../../../utils/Request'
import ActionCreators from './actionCreators'
//所有请求的axios 都放在这里
export default class RequestCreators {

    static TODO_LIST_GET_LIST_REQUEST= ()=>{
        return (dispatch)=>{
            const url = 'http://localhost:8082/hx3d/web/home/energytest/getlist';
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
}