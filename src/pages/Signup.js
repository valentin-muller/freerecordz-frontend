import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Signup extends Component {
  state = { username: "", password: "", email: "", firstName: "", lastName: "", bio: ""};

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email, firstName, lastName, bio } = this.state;
    console.log("bio", bio);
    this.props.signup(username, password, email, firstName, lastName, bio);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email, firstName, lastName, bio } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="formBasicFname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your firstname"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your surname"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
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

          <Form.Group controlId="formBasicBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bio includes your contact information"
              name="bio"
              value={bio}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);