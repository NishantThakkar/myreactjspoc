import React from 'react';
import ModalComponent from './ModalComponent'
import Dialog from "react-bootstrap-dialog";
export class TodoList extends React.Component{
render(){
    if (this.props.items.length > 0) {
        return(
            <div>
                {/* <ModalComponent /> */}
                    <ul className="list-group">
                        {this.props.items.map((item,index) => (
                            <li className="list-group-item" key={index}>
                                <input type="checkbox" className="form-check-input" style={{marginRight: '5px'}}/>
                                
                                
                                    {item.text}
                                
                                <button data-bs-target="#exampleModal" className="btn btn-sm btn-outline-danger" style={{float:'right'}} onClick={(event) => this.deleteTodo(event,index)}>Delete</button>
                                <Dialog ref={(el) => {this.dialog = el}}  />
                            </li>                                            
                        ))}
                    </ul>
            {/* {this.props.items.forEach(item => {
                console.log(item.text);
                <h1>{item.text}</h1>    
            })}   */}
            </div>      
        );    
    }
    else{
        return(
            <div>No todo !!!</div>
        );
    }
}
deleteTodo = (event,index)=>{
    let item = this.props.items[index];
    this.dialog.show({
        actions: [
            Dialog.CancelAction(),
            Dialog.OKAction(() => {
                this.props.onDeleteTodo(index);
            })
        ],
        title: 'Confirm',
        body: 'Are you sure to delete: '+ item.text + ' ?'
    });
}
}