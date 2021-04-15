import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.userCount}Users!
          {this.props.users.map(({ username, hometown }) => (
            <li key={'user-' + username}>{username + '-' + hometown}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  const { users } = state;
  const userCount = users.length;
  return { users, userCount };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
