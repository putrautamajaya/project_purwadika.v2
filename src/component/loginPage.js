import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../support/loginPage.css';

class loginPage extends Component {
    render() {
        console.log(this.props.userLogin);
        return (
            <div class="container">
                <br/>
                <br/>
                <br/>
                <div class="card card-container" style={{textAlign: "center"}}>
                        {/* <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" /> */}
                    <h1>ShoesMarket</h1>
                    <p id="profile-name" class="profile-name-card"></p>

                    <form class="form-signin">
                        <span id="reauth-email" class="reauth-email"></span>

                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />

                        <div id="remember" class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>

                        <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    
                    <a href="#" class="forgot-password">
                        Forgot the password?
                    </a>

                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps)(loginPage);