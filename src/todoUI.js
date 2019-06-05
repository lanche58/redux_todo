import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

function ToDoUI(props) {
    return (
        <div style={{padding: "10px"}}>
            <Input style={{width: "300px"}} onChange={props.changeHandle} value={props.inputValue} size="large" placeholder="todo"/>
            <Button onClick={props.addListHandle} style={{height: "40px", verticalAlign: "top", marginLeft: "10px", width: "80px"}} type="primary">add</Button>
            <List
                style={{marginTop: "10px", width: "390px"}}
                bordered
                dataSource={props.todoList}
                renderItem={(item, index) => <List.Item onClick={() => props.deleteListHandle(index)}>{item}</List.Item>}
            />
        </div>
    )
}

export default ToDoUI;