import PropTypes from 'prop-types';
import React from 'react';

export default class UserBox extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  render() {
    return (
      <div className="search-box">
           <span className="avatar"></span>
           <span className="first-name">{this.props.user.first_name}</span> 
           <span className="last-name">{this.props.user.last_name}</span>
           <span className="title">{this.props.user.title}</span>
      </div>
    );
  }
}
