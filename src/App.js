import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import {Home} from "./Home"
import {Recipe} from "./Recipe"
class App extends React.Component{
  render(){
    return (
      <MemoryRouter>
        <Navbar>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/newRecipe">
            <Nav.Link>New Recipe</Nav.Link>
          </LinkContainer>
        </Navbar>
        <Routes>
          <Route path="/" element={
            <Home
            />
          }>
          </Route>
          <Route path="/newRecipe" element={
            <Recipe
            />
          }>
          </Route>
        </Routes>
      </MemoryRouter>
    );
}
}

export default App;
