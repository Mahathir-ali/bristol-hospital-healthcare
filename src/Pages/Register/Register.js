import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleEmailChange, handlePassword,handleRegister, error, handleNameChange } = useAuth();
    return (
        <div className="form_body">
            <div className="form">
                <h1>Please Register</h1>
            <form onSubmit={handleRegister} >
                <p>{error}</p>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="name" className="form-control" id="name" placeholder="Enter Your Name"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input onBlur={handleEmailChange}  type="email" className="form-control" id="inputEmail3" placeholder="Enter your email" required/>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger"></div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" placeholder="password"/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Register</button><br/>
                    <Link to="/login">Already have an account?</Link>

            </form>
            </div>
        </div>
    );
};
export default Register;