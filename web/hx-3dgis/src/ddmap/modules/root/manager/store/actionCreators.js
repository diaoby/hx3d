import ActionsType from './actionsType'

//定义js里的方法action
export default class ActionCreators {

    static TODO_LIST_CHANGE_INPUT_ACTION = (value)=>({
        type:ActionsType.TODO_LIST_CHANGE_INPUT,
        value
    })

    static TODO_LIST_ADD_ITEM_ACTION = ()=>({
        type:ActionsType.TODO_LIST_ADD_ITEM
    })

    static TODO_LIST_DELETE_ITEM_ACTION = (index)=>({
        type:ActionsType.TODO_LIST_DELETE_ITEM,
        index
    })

    static TODO_LIST_GET_LIST_ACTION = (data)=>({
        type:ActionsType.TODO_LIST_GET_LIST,
        data
    })

    static PARK_INFO_GET_INFO_ACTION = (data)=>({
        type:ActionsType.PARK_INFO_GET_INFO,
        data
    })

}


