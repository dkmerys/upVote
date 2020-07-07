import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.userName}</h3>
        <h3>{props.message}</h3>
        <h3>(U+1F44D){props.upVote}</h3>
        <h3>(U+1F44E){props.downVote}</h3>
      </div>
    </React.Fragment>
  );
}


Post.propTypes = {
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  upVote: PropTypes.number.isRequired,
  downVote: PropTypes.number.isRequired,
  whenPostClicked: PropTypes.func
};

export default Post;