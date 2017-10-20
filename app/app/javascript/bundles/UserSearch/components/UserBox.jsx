import PropTypes from 'prop-types';
import React from 'react';
import User from './User'

export default class UserBox extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  render() {
    let userArray = this.props.users;
    let users;
    if(userArray){
      users = Object.keys(userArray).map(function(key, index) {
        return (
          <User key={userArray[key].id} user={userArray[key]} />
        );
      });
    }
    return (
      <div>
          {users}
      </div>
    );
  }
}
