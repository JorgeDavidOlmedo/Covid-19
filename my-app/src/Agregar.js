import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table, Column, Cell, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl} from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";


export const Agregar = () =>{

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

    <div className="Agregar">
     

      <br/>
      <div>

     <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre2</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" autoComplete="off" onChange={(event)=>{
            setName(event.target.value)
          }} />
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
    </div>
     <br/>         

    </div>

}



