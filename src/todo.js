import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import {getInputValueChangeAction, getAddListAction, getDeleteListAction} from './actionCreators';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this));
    }
    render() {
        return (
            <div style={{padding: "10px"}}>
                <Input style={{width: "300px"}} onChange={this.changeHandle.bind(this)} value={this.state.inputValue} size="large" placeholder="todo"/>
                <Button onClick={this.addListHandle.bind(this)} style={{height: "40px", verticalAlign: "top", marginLeft: "10px", width: "80px"}} type="primary">add</Button>
                <List
                    style={{marginTop: "10px", width: "390px"}}
                    bordered
                    dataSource={this.state.todoList}
                    renderItem={(item, index) => <List.Item onClick={this.deleteListHandle.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        )
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