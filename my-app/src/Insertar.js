import { useState } from "react";
import Axios from "axios";
import { Form, Button, Navbar, Nav, NavDropdown, FormControl} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Listar } from './Listar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router"

export const Insertar = () => {
    let history = useHistory()
    const [nombre, setName] = useState("");
    const [edad, setEdad] = useState(0);
    const [ciudad, setCiudad] = useState("");
    const [temperatura, setTemperatura] = useState(0);

    const agregarPersonas = () =>{
      Axios.post("http://localhost:3001/create",{
        name:nombre,
        edad:edad,
        ciudad:ciudad,
        temperatura:temperatura
      }).then(()=>{
          console.log('success..');
          history.push("/listar");
          
      });
   }

    return (
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

          <br/><br/>  
          <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre" autoComplete="off" onChange={(event)=>{
                setName(event.target.value)
            }} autoFocus/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" placeholder="Ingrese la edad" autoComplete="off" onChange={(event)=>{
                setEdad(event.target.value)
            }}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la ciudad" autoComplete="off" onChange={(event)=>{
                setCiudad(event.target.value)
            }}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Temperatura</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la temperatura" autoComplete="off" onChange={(event)=>{
                setTemperatura(event.target.value)
            }}/>
            </Form.Group>
            <Button variant="primary" onClick={agregarPersonas}>
                 Agregar
            </Button>
    </Form>
    </div>)
    
};

