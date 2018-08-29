import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class header extends Component {

    headerProject = () => {
        return(
            <Navbar fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">ShoesMarket</a>
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
                            <MenuItem eventKey={1.4}>Tennis</MenuItem>
                            <MenuItem eventKey={1.5}>Soccer</MenuItem>
                            <MenuItem eventKey={1.6}>Sneaker</MenuItem>
                            <MenuItem eventKey={1.7}>Training</MenuItem>
                            <MenuItem divider />
                        </NavDropdown>

                        <NavDropdown eventKey={2} title="Brand" id="basic-nav-dropdown">
                            <MenuItem divider />
                            <MenuItem eventKey={2.1}>Addidas</MenuItem>
                            <MenuItem eventKey={2.2}>Nike</MenuItem>
                            <MenuItem eventKey={2.3}>Puma</MenuItem>
                            <MenuItem eventKey={2.4}>Reebok</MenuItem>
                            <MenuItem eventKey={2.5}>Jordan</MenuItem>
                            <MenuItem eventKey={2.6}>Under Armor</MenuItem>
                            <MenuItem eventKey={2.7}>New Balance</MenuItem>
                            <MenuItem divider />
                        </NavDropdown>

                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            
                            <p class="btn btn-warning ">
                                <span class="glyphicon glyphicon-search"></span> Search 
                            </p>
                            
                        </Navbar.Form>
                    </Nav>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Login
                        </NavItem>

                        <NavItem eventKey={2} href="#">
                            Register
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
    
        );
            
    }

    render() {
        return(
            this.headerProject()
        );
    }
}

export default header;