import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Feed from "./pages/Feed"


import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/upload" component={Upload} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/feed" component={Feed} />
        </Switch>

        <BottomBar />
      </div>
    );
  }
}

export default App;
