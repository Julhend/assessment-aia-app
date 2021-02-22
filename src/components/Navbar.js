import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Button, FormGroup, Input } from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="danger"
        variant="dark"
        className="nava"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          ASSESSMENT
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/Feeds">
              <ReactBootStrap.Nav.Link href="#feeds">
                Feeds
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="search" name="search" id="search" placeholder="search" />
            </FormGroup>
            <Button>Search</Button>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
