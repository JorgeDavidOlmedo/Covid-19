import { useState } from "react";
import Axios from "axios";
import { Form, Button, Navbar, Nav, NavDropdown, FormControl,Table, Column, Cell} from "react-bootstrap";

export const Listar = () => {


   const [personasList, setPersonasList] = useState([]);
    const getPersonas = () =>{
    Axios.get("http://localhost:3001/personas").then((response)=>{
        console.log(response);
        setPersonasList(response.data);
    });
 }

    getPersonas();

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
          <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Ciudad</th>
                <th>Temperatura</th>
                </tr>
            </thead>
            <tbody>
            {personasList.map((val,key)=>{
                        return <tr>
                        <td>{val.id}</td>
                        <td>{val.descripcion}</td>
                        <td>{val.edad}</td>
                        <td>{val.direccion}</td>
                        <td>{val.temperatura}</td></tr>
                    })}
                
            </tbody>
        </Table>       
    </div>)
    
};

