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

  constructor(props) {
    super(props);
    this.state = { 
      users: JSON.parse(this.props.users),
    };
  }

  render() {
    return (
      <div>
        <h3>
          Results
        </h3>
        <hr />
          <UserBox users={this.state.users} />
      </div>
    );
  }
}
