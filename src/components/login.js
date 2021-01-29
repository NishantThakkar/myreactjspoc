import React, {Component, useState} from "react";
import { useAuth } from "../context/auth";

export default class Login extends Component{
    
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <form onSubmit={(event) => this.login(event)}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email address" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe"/>
                        <label htmlFor="rememberMe" className="custom-control-label">Remember Me</label>
                    </div>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Login</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        )
    }
    
    login = (event) => {   
        event.preventDefault(); 
        useAuth("MY_TOKEN");
        const [isLoggedIn, setLoggedIn] = useState(false);
        setLoggedIn(true);  
        if (isLoggedIn) {
            this.props.history.push('todo');    
        }           
        
    }
}