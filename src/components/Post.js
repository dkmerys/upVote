import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.userName}</h3>
        <h3>{props.message}</h3>
        <h3>{props.timeStamp}</h3>
        <h3>&#128077; {props.upVote}</h3>
        <h3>&#x1f44e; {props.downVote}</h3>
      </div>
    </React.Fragment>
  );
}


Post.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  upVote: PropTypes.number.isRequired,
  downVote: PropTypes.number.isRequired,
  timeStamp: PropTypes.string,
  whenPostClicked: PropTypes.func
};


export default Post;