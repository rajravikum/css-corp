import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };

    test() {}
    render() {
    const { firstName, lastName } = this.props;
    return (
     <div>
          <h1>{firstName} {lastName}</h1>
      </div>
    );
  }
}
export default User;