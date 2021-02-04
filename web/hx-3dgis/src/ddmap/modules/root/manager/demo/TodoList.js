import React, {Component } from 'react';
import 'antd/dist/antd.css'
import store from '../store/index'
import ActionCreators from '../store/actionCreators'
import RequestCreators from '../store/requestCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component{

    constructor(props){
        super(props)
        this.state = store.getState();
        store.subscribe(()=>this.storeChange())
    }


    componentDidMount(){
        const action  = RequestCreators.TODO_LIST_GET_LIST_REQUEST()
        store.dispatch(action);
    }

    storeChange(){
        this.setState(store.getState())
    }

    changeInputValue(e){
        const action = ActionCreators.TODO_LIST_CHANGE_INPUT_ACTION(e.target.value)
        store.dispatch(action);
    }

    clickBtn(){
        const action=ActionCreators.TODO_LIST_ADD_ITEM_ACTION()
        store.dispatch(action);
    }


    deleteItem(index){
        const action=ActionCreators.TODO_LIST_DELETE_ITEM_ACTION(index)
        store.dispatch(action);
    }

    render(){
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={(e)=>this.changeInputValue(e)}
                clickBtn={()=>this.clickBtn()}
                list={this.state.list}
                deleteItem={()=>this.deleteItem()}
            ></TodoListUI>
        )
    }
}

export default TodoList