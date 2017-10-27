import PropTypes from 'prop-types';
import React from 'react';
import UserBox from './UserBox'

export default class UserSearch extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     users: JSON.parse(this.props.users),
  //   };
  // }

  render() {
    let userArray = JSON.parse(this.props.users);
    let users = [];
    
    if(userArray){
      users = Object.keys(userArray).map(function(key, index) {
        return (
          <UserBox key={userArray[key].id} user={userArray[key]} />
        );
      });
    }

    return (
      <div className="results-box">
        <h3>
          Results
        </h3>
        <hr />
          {users}
      </div>
    );
  }
}
