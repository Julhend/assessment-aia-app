import React from 'react';
import "./App.css"
import Feeds from "./components/Feeds";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Feeds" component={Feeds}>
            <Feeds />
          </Route>
        </Switch>
      </Router>
      {/* <Pagination /> */}
    </div>
  )
}

export default NavBar;