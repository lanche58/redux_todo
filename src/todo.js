import React from 'react';
import store from './store';
import ToDoUI from './todoUI';
import {getInputValueChangeAction, getAddListAction, getDeleteListAction, getInitialListAction} from './actionCreators';
import axios from 'axios';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this));
    }
    render() {
        return (
            <ToDoUI 
                inputValue={this.state.inputValue}
                todoList={this.state.todoList}
                changeHandle={this.changeHandle.bind(this)}
                addListHandle={this.addListHandle.bind(this)}
                deleteListHandle={this.deleteListHandle.bind(this)}
            />
        )
    }

    // 从接口获取数据给todoList一些初始值
    // 模拟mock
    // 使用asixo

    componentDidMount() {
        axios.get('/todo.json').then((res) => {
            const data = res.data;
            store.dispatch(getInitialListAction(data));
        });
    }


    changeHandle(e) {
        store.dispatch(getInputValueChangeAction(e.target.value));
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    addListHandle() {
        store.dispatch(getAddListAction());
    }

    deleteListHandle(index) {
        store.dispatch(getDeleteListAction(index));
    }
}

export default ToDo;