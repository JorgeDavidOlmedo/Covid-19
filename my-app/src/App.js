import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Insertar } from './Insertar';
import { Listar } from './Listar';

class App extends Component {

  render() {
    return (
   
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Insertar" component={Insertar}/>
            <Route path="/Listar" component={Listar}/>
          </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
  
}

export default App;
