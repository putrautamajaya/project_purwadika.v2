import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut, keepLogin, cookieCheck } from '../actionCreator';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class header extends Component {
    componentWillMount(){
        const cookieDiBrowser = cookies.get('userLogin');
        
        if(cookieDiBrowser !== undefined) {
            this.props.keepLogin(cookieDiBrowser);
            console.log('masuk ke keeplogin');
        }
        else if (cookieDiBrowser === undefined) {
            this.props.cookieCheck();
            console.log('masuk ke cookieCheck');
        }
    }

    onLogOutClick = () => {
        this.props.onLogOut();
        cookies.remove('userLogin')
        this.props.cookieCheck();
    }

    headerProject = () => {
        console.log(this.props.userLogin)
        if(this.props.userLogin.username === "") {
            return(
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">ShoesMarket</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
    
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="Shoes Category" id="basic-nav-dropdown">
                                <MenuItem divider />
                                <MenuItem eventKey={1.1}>Basket Ball</MenuItem>
                                <MenuItem eventKey={1.2}>Futsal</MenuItem>
                                <MenuItem eventKey={1.3}>Running</MenuItem>
                                <MenuItem eventKey={1.4}>Soccer</MenuItem>
                                <MenuItem eventKey={1.5}>Sneaker</MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
    
                            <NavDropdown eventKey={2} title="Brand" id="basic-nav-dropdown">
                                <MenuItem divider />
                                <MenuItem eventKey={2.1}>
                                    <Link to="/adidas">Adidas</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.2}>
                                    <Link to="/nike">Nike</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.3}>
                                    <Link to="/reebok">Reebok</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.4}>
                                    <Link to="/underarmor">Under Armor</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.5}>
                                    <Link to="/newbalance">New Balance</Link>
                                </MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
    
                            <Navbar.Form pullRight>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" />
                                </FormGroup>{' '}
                                
                                <p class="btn btn-warning ">
                                    <span class="glyphicon glyphicon-search"></span> Search 
                                </p>{' '}
    
                                <p class="btn btn-info ">
                                    <span class="glyphicon glyphicon-shopping-cart"></span> Cart 
                                </p>
                                
                            </Navbar.Form>
                        </Nav>
    
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <Link to="/loginPage">Login</Link>
                            </NavItem>
    
                            <NavItem eventKey={2} href="#">
                                <Link to="/registerPage">Register</Link>
                            </NavItem>
                        </Nav>
    
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        
        else {
            return(
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">ShoesMarket</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
    
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="Shoes Category" id="basic-nav-dropdown">
                                <MenuItem divider />
                                <MenuItem eventKey={1.1}>Basket Ball</MenuItem>
                                <MenuItem eventKey={1.2}>Futsal</MenuItem>
                                <MenuItem eventKey={1.3}>Running</MenuItem>
                                <MenuItem eventKey={1.4}>Soccer</MenuItem>
                                <MenuItem eventKey={1.5}>Sneaker</MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
    
                            <NavDropdown eventKey={2} title="Brand" id="basic-nav-dropdown">
                                <MenuItem divider />
                                <MenuItem eventKey={2.1}>
                                    <Link to="/adidas">Adidas</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.2}>
                                    <Link to="/nike">Nike</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.3}>
                                    <Link to="/reebok">Reebok</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.4}>
                                    <Link to="/underarmor">Under Armor</Link>
                                </MenuItem>
                                <MenuItem eventKey={2.5}>
                                    <Link to="/newbalance">New Balance</Link>
                                </MenuItem>
                                <MenuItem divider />
                            </NavDropdown>
    
                            <Navbar.Form pullRight>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" />
                                </FormGroup>{' '}
                                
                                <p class="btn btn-warning ">
                                    <span class="glyphicon glyphicon-search"></span> Search 
                                </p>{' '}
    
                                <p class="btn btn-info ">
                                    <span class="glyphicon glyphicon-shopping-cart"></span> Cart 
                                </p>
                                
                            </Navbar.Form>
                        </Nav>
    
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <p style={{margin: "0"}}>Hello, {this.props.userLogin.username}</p>
                            </NavItem>
    
                            <NavItem eventKey={2} href="#">
                            <p style={{margin: "0"}} onClick={this.onLogOutClick}>Log Out</p>
                            </NavItem>
                        </Nav>
    
                    </Navbar.Collapse>
                </Navbar>
            );
        }   
    }

    renderAfterCookieCheck = () => {
        if (this.props.userLogin.cookieCheck === true) {
            return this.headerProject();
        }
        return <div></div>;
    }

    render() {
        return(
            this.renderAfterCookieCheck()
        );
    }
}

const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps,{ onLogOut, keepLogin, cookieCheck })(header);
