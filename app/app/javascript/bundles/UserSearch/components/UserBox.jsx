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
  handleFriendship(e) {
    axios.post('/friend_requests.json', {
      authenticity_token: ReactOnRails.authenticityToken(),
      responseType: 'json',
      friend_request: {
        friend_id: this.props.user.id,
        user_id: this.props.current_user_id
      }
    })
    .then(function (response) {
      var friendReqResponse = response;
      if (response.status != 201) {
        alert('You already sent a request to this person.');

      } else {
        alert('A request has been sent.');
        //send notification
        axios.post('/notifications.json', {
          authenticity_token: ReactOnRails.authenticityToken(),
          responseType: 'json',
          notification: {
            notified_by: friendReqResponse.data.user_id,
            user_id: friendReqResponse.data.friend_id
          },
          notifiable_type: {
            notifiable_type: "FriendRequest"
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

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
