import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInput extends Component {
  state = {
    username: '',
    hometown: '',
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', user }),
  };
};

export default connect((state) => state, mapDispatchToProps)(UserInput);
