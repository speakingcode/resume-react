import React, {useState} from 'react';

import { useQuery } from '@apollo/react-hooks'
import { gql }      from 'apollo-boost'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}                   from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
}                   from 'reactstrap'

import About        from './About'
import Home         from './Home'
import Resume       from './Resume'

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="App">
    <Router>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App
