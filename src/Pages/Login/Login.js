import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, handleLogin} = useAuth();
    
    return (
        <div className="form_body">
            <div className="form">
                <h1>Login to Bristol</h1>
            <form onSubmit={handleLogin}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Sign in</button><br/>
                    <Link to="/register">Create a new account?</Link>
                    <p>-------Login with other account-------</p>
                    

            </form>
            <button onClick={signInUsingGoogle}><i className="fab fa-google"></i> Goolge Login</button>
            </div>
        </div>
    );
};

export default Login;