import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut, keepLogin, cookieCheck, keepLoginAdmin, onSearch } from '../actionCreator';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class header extends Component {
    componentWillMount(){
        const cookieDiBrowser = cookies.get('userLogin');
        const cookieAdmin = cookies.get('adminLogin');
        
        if(cookieDiBrowser !== undefined) {
            this.props.keepLogin(cookieDiBrowser);
            console.log('masuk ke keeplogin');
        }
        //kalau admin yg login
        else if(cookieAdmin !== undefined) {
            this.props.keepLoginAdmin(cookieAdmin);
            console.log('masuk ke keeplogin');
        }

        else if (cookieDiBrowser === undefined || cookieAdmin === undefined) {
            this.props.cookieCheck();
            console.log('masuk ke cookieCheck');
        }
    }

    onLogOutClick = () => {
        this.props.onLogOut();
        cookies.remove('userLogin');
        cookies.remove('adminLogin');
        this.props.cookieCheck();
    }

    onCartClick = () => {
        alert('Please Login First')    
    }

    onSearchClick = () => {
        let itemSearch = this.refs.search.value;
        this.props.onSearch(itemSearch);

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
                                <MenuItem eventKey={1.1}>
                                    <Link to="/basketball">Basket Ball</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.2}>
                                    <Link to="/futsal">Futsal</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.3}>
                                    <Link to="/running">Running</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.4}>
                                    <Link to="/soccer">Soccer</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.5}>
                                    <Link to="/sneaker">Sneaker</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.6}>
                                    <Link to="/allitem">All Item</Link>
                                </MenuItem>
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
                                    <input ref="search" type="text" className="form-control" placeholder="Search" />
                                </FormGroup>{' '}
                                
                                <Link to="/search" class="btn btn-warning " onClick={this.onSearchClick}>
                                    <span class="glyphicon glyphicon-search"></span> Search 
                                </Link>{' '}
    
                                <Link to="/" style={{color:"white"}} onClick={this.onCartClick} className="btn btn-info ">         
                                    <span class="glyphicon glyphicon-shopping-cart"></span> Cart 
                                </Link>
                                
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
                                <MenuItem eventKey={1.1}>
                                    <Link to="/basketball">Basket Ball</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.2}>
                                    <Link to="/futsal">Futsal</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.3}>
                                    <Link to="/running">Running</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.4}>
                                    <Link to="/soccer">Soccer</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.5}>
                                    <Link to="/sneaker">Sneaker</Link>
                                </MenuItem>
                                <MenuItem eventKey={1.6}>
                                    <Link to="/allitem">All Item</Link>
                                </MenuItem>
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
                                    <input ref="search" type="text" className="form-control" placeholder="Search" />
                                </FormGroup>{' '}
                                
                                <Link to="/search" class="btn btn-warning " onClick={this.onSearchClick}>
                                    <span class="glyphicon glyphicon-search"></span> Search 
                                </Link>{' '}
    
                                <Link to="/cart" className="btn btn-info " style={{color:"white"}}>
                                    <span class="glyphicon glyphicon-shopping-cart"></span> Cart
                                </Link> 
                                
                                
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

    headerProjectAdmin = () => {
        console.log(this.props.userLogin)
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
                            <MenuItem eventKey={1.1}>
                                <Link to="/basketball">Basket Ball</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                <Link to="/futsal">Futsal</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.3}>
                                <Link to="/running">Running</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.4}>
                                <Link to="/soccer">Soccer</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.5}>
                                <Link to="/sneaker">Sneaker</Link>
                            </MenuItem>
                            <MenuItem eventKey={1.6}>
                                <Link to="/allitem">All Item</Link>
                            </MenuItem>
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
                                <input ref="search" type="text" className="form-control" placeholder="Search" />
                            </FormGroup>{' '}
                            
                            <Link to="/search" class="btn btn-warning " onClick={this.onSearchClick}>
                                <span class="glyphicon glyphicon-search"></span> Search 
                            </Link>{' '}

                            <Link to="/cart" className="btn btn-info " style={{color:"white"}}>
                                <span class="glyphicon glyphicon-shopping-cart"></span> Cart
                            </Link>
                            
                        </Navbar.Form>
                    </Nav>

                    <Nav pullRight>
                        <NavDropdown eventKey={2} title={"Hello Admin, "+ this.props.userLogin.username} id="basic-nav-dropdown">
                            <MenuItem divider />
                            <MenuItem eventKey={2.1}>
                                <Link to="/adidas">Edit New Arrival Item</Link>
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                <Link to="/nike">Edit Carousel Image</Link>
                            </MenuItem>
                            <MenuItem eventKey={2.3}>
                                <Link to="/addmoreitem">Add More Item</Link>
                            </MenuItem>
                            <MenuItem divider />
                        </NavDropdown>

                        <NavItem eventKey={2} href="#">
                        <p style={{margin: "0"}} onClick={this.onLogOutClick}>Log Out</p>
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );   
    }

    renderAfterCookieCheck = () => {
        console.log(this.props.userLogin.status);
        if (this.props.userLogin.cookieCheck === true) {
            if(this.props.userLogin.status === "admin") {
                return this.headerProjectAdmin();
            }
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
    let itemSearch = state.search

    return { userLogin, itemSearch };
}

export default connect(mapStateToProps,{ onLogOut, keepLogin, cookieCheck, keepLoginAdmin, onSearch})(header);
