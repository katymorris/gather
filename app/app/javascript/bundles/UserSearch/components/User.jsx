import PropTypes from 'prop-types';
import React from 'react';

export default class User extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  render() {
    return (
      <div>
           <span>{this.props.user.first_name}</span> <span>{this.props.user.last_name}</span>
      </div>
    );
  }
}
