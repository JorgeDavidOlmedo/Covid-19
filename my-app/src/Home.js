import React from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl} from "react-bootstrap";

export const Home = () => (
    <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Inicio</Nav.Link>
                <NavDropdown title="Registros" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/insertar">Agregar</NavDropdown.Item>
                  <NavDropdown.Item href="/listar">Listar</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
    </div>
);