import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table, Column, Cell, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl} from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";


export const Menu = () =>{

  const [nombre, setName] = useState("");
  const [edad, setEdad] = useState(0);
  const [ciudad, setCiudad] = useState("");
  const [temperatura, setTemperatura] = useState(0);

  const [personasList, setPersonasList] = useState([]);



   const agregarPersonas = () =>{
      Axios.post("http://localhost:3001/create",{
        name:nombre,
        edad:edad,
        ciudad:ciudad,
        temperatura:temperatura
      }).then(()=>{
          console.log('success..');
      });
   }

   const getPersonas = () =>{
    Axios.get("http://localhost:3001/personas").then((response)=>{
        console.log(response);
        setPersonasList(response.data);
    });
 }

    <div className="App">
  
      <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <NavDropdown title="Registros" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Agregar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          
        </div>
        
}


export default Menu;
