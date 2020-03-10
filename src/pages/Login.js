import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default withAuth(Login);




        // <form onSubmit={this.handleFormSubmit}>
        //   <label>Username:</label>
        //   <input
        //     type="text"
        //     name="username"
        //     value={username}
        //     onChange={this.handleChange}
        //   />

        //   <label>Password:</label>
        //   <input
        //     type="password"
        //     name="password"
        //     value={password}
        //     onChange={this.handleChange}
        //   />

        //   <input type="submit" value="Login" />
        // </form>;
