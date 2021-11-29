import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container animate__animated animate__bounceInUp">
            <div className="d-flex justify-content-center h-100">
                <div className="card-login">
                    <div className="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username" />

                            </div>
                            <div className="input-group form-group  animate__animated animate__bounceInUp">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links"  style={{color:"white"}}>
                            Don't have an account?<Link to="/Register">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="#">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
