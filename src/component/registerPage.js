import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { API_URL_1 } from '../support/API_url';
import { onLogin, cookieCheck } from '../actionCreator';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class registerPage extends Component {

    state = {register : ""}

    componentWillReceiveProps(newProps) {
        if(newProps.userLogin.username !== "") {
            cookies.set('userLogin', newProps.userLogin.email, {path:'/'})
            this.props.cookieCheck();
        }
    }

    onRegisterClick = () => {
        axios.post(API_URL_1 + '/users', {
            username: this.refs.inputUsername.value,
            email: this.refs.inputEmail.value,
            password: this.refs.inputPassword.value
        })
        .then((Response) => {
            alert('Register Success');
            this.setState({register: "success"});
        })
        .catch((Response) => {
            alert('Register Failed');
        })
    }

    render() {
        if(this.state.register === ""){
            return(
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <div className="card card-container" style={{textAlign: "center"}}>
                            
                        <h1>ShoesMarket</h1>
                        <p id="profile-name" className="profile-name-card text-info">Please Register Your ID</p>
                        <br/>
    
                        <form className="form-signin">
    
                            <input type="text" ref="inputUsername" className="form-control" placeholder="User Name" required autofocus />
                            <input type="email" ref="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <input type="password" ref="inputPassword" className="form-control" placeholder="Password" required />
    
                            <input className="btn btn-lg btn-primary btn-block btn-signin" type="button" value="Register Now" onClick={this.onRegisterClick}/>
                        </form>
    
                    </div>
                </div>
            );
        }
        return <Redirect to="/loginPage" />
    }
}

export default connect(null, { onLogin,cookieCheck })(registerPage);