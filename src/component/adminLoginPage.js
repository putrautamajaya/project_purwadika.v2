import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginAdmin, cookieCheck } from '../actionCreator';
import { Redirect } from 'react-router-dom';
import '../support/loginPage.css';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class loginPage extends Component {
    //ketika properti dari global state ada yg berubah. dia akan set cookies
    //parameter newProps itu property yg setelah di ubah.
    componentWillReceiveProps(newProps) {
        if(newProps.userLogin.username !== "") {
            cookies.set('adminLogin', newProps.userLogin.email, {path:'/'})
            this.props.cookieCheck();
        }
    }

    onLoginClick = () => {
        let email = this.refs.inputEmail.value;
        let password = this.refs.inputPassword.value;

        this.props.onLoginAdmin({email,password});
    }

    render() {
        console.log(this.props.userLogin);

        if(this.props.userLogin.username == "") {
            return (
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <div className="card card-container" style={{textAlign: "center"}}>
                            {/* <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" /> */}
                        <h1>ShoesMarket</h1>
                        <h4 className="text-info">Admin Login</h4>
                        <p id="profile-name" className="profile-name-card"></p>
    
                        <form className="form-signin">
    
                            <input type="email" ref="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input type="password" ref="inputPassword" className="form-control" placeholder="Password" required />
    
                            <input className="btn btn-lg btn-primary btn-block btn-signin" type="button" value="Sign in" onClick={this.onLoginClick}/>
                        </form>
                        
                        <h3 className="text-danger">{this.props.userLogin.error}</h3>

                        <a href="#" className="forgot-password">
                            Forgot the password?
                        </a>
    
                    </div>
                </div>
            );
        }
        return <Redirect to="/" />
        
    }
}
const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps, { onLoginAdmin,cookieCheck })(loginPage);