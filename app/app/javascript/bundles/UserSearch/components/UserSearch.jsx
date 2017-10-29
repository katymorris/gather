import PropTypes from 'prop-types';
import React from 'react';
import UserBox from './UserBox'
import FilterBox from './FilterBox'

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
    let curUserId = this.props.current_user_id;
    if(userArray){
      users = Object.keys(userArray).map(function(key, index) {
        return (
          <UserBox key={userArray[key].id} user={userArray[key]} current_user_id={curUserId} />
        );
      });
    }

    return (
      <div className="results-box row">
          <section id="search" className="column half">
            {users}
          </section>
          <section id="filter" className="column quarter">
            <FilterBox />
          </section>
      </div>
    );
  }
}
