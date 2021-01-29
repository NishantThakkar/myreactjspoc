import React from 'react';

export class Hello extends React.Component
{
    constructor(props){
        super(props);
        this.state = {time: 0}
    }
    tick(){
        this.setState(state => ({
            time: state.time + 1
        }));
    }
    render(){
        console.log(this.props);
        setInterval(() => this.tick(), 10000);
        return <h1>Hello {this.props.name} Welcome {this.state.time}</h1>
    }
    
    
}