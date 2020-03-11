import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import userService from "../lib/user-service";


class UserId extends Component {
    state = {
        user: {}
    }
  componentDidMount() {
    console.log("this.props", this.props.match.params);
    const { id } = this.props.match.params
    userService.findById(id).then(userObj=> {
        console.log('userObj', userObj)
        this.setState({user: userObj})
    })
  }
  render() {
    const {
      email,
      firstName,
      lastName,
      username,
      password,
      savedMusicArr
    } = this.state.user;
    console.log('this.state.user', this.state.user)
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {username} to your profile</h1>
        <h3>Your email: {email}</h3>
        <h3>your Firstname: {firstName}</h3>
        <h3>Your Lastname: {lastName}</h3>
        <h3>Your username: {username}</h3>
        <h3>Your password: {password}</h3>
        <h3>Your saved tracks: {savedMusicArr}</h3>
      </div>
    );
  }
}

export default withAuth(UserId);
