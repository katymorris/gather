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
      <div className="filter-box">
         <h4>Filter</h4>
      </div>
    );
  }
}
