import React from 'react';
import {TodoList} from './TodoList';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
render(){
    
    return (
        <div>                   
            <form onSubmit={this.addTodo} className="mb-3">
                <div className="input-group">
                    <input className="form-control" placeholder="Please enter your task" autoComplete="off" type="text" value={this.state.text} onChange={this.handleChange} required></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="submit">Add </button>
                    </div>
                </div>                
            </form>
            <TodoList items={this.state.items} onDeleteTodo={(index) => this.deleTodo(index)} />
        </div>
    );
}
addTodo(e){
    e.preventDefault();
var newItem = {text: this.state.text};
this.setState(state => ({
    items: [...state.items,newItem],
    text: ''
}));
}


handleChange(e){    
    this.setState({ text: e.target.value });
}
deleTodo = index => {
    
         var taskArray = [...this.state.items];
        taskArray.splice(index, 1);
        this.setState(state => ({
            items: [...taskArray],        
        }));
    
}
}