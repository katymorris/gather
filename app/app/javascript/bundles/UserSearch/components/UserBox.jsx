import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios'

export default class UserBox extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };
  /**
   * @param props - Comes from your rails view.
   */
  constructor() {
    super();
    this.state = {
        requestActive: false,
        isFriend: false
    }
  }
  sendFriendshipRequest() {

  }
  removeFriendshipRequest() {
    
  }
  handleFriendship(e) {
    axios.post('/friendships.json', {
      authenticity_token: ReactOnRails.authenticityToken(),
      responseType: 'json',
      friendship: {
        friend_id: this.props.user.id,
        user_id: this.props.current_user_id
      }
    })
    .then(function (response) {
      console.log(response);
      if (response.status != 201) {
        alert('You are already friends with this person.')
      } else {
        alert('A request has been sent')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    // var boxElements;
    // if (this.props.current_user_id == this.props.user.id) {
    //   boxElements =            <span className="avatar"></span>
    //   <span className="first-name">{this.props.user.first_name}</span> 
    //   <span className="last-name">{this.props.user.last_name}</span>
    //   <span className="title">{this.props.user.title}</span>
    // } else {
    console.log(this.state)
    
    // }
    return (
      <div className="search-box">
           <span className="avatar"></span>
           <span className="first-name">{this.props.user.first_name}</span> 
           <span className="last-name">{this.props.user.last_name}</span>
           <span className="title">{this.props.user.title}</span>
           <button onClick={this.handleFriendship.bind(this)} className="add btn">Add</button>
      </div>
    );
  }
}
