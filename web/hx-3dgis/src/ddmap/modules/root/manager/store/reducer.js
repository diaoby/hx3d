import ActionsType from './actionsType'


const defaultState = {
    inputValue:'write something',
    list:[
       
    ],
    //园区概况信息
    parkInfo:{}
};

export default (state = defaultState,action)=>{
    //reducer里只能接受state,不能改变state
    if(action.type===ActionsType.TODO_LIST_CHANGE_INPUT){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type===ActionsType.TODO_LIST_ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type===ActionsType.TODO_LIST_DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    if(action.type===ActionsType.TODO_LIST_GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    //园区概况数据获取
    if(action.type===ActionsType.PARK_INFO_GET_INFO){
        let newState = JSON.parse(JSON.stringify(state))
        newState.parkInfo = action.data
        return newState
    }
    
    return state;
}