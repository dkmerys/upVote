import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <div className='container'>
          <h3 className='text'>{props.userName}</h3>
          <h3 className='text'>{props.message}</h3>
          <h3 className='text'>{props.timeStamp}</h3>
          <h3 className='text'>&#128077; {props.upVote}</h3>
          <h3 className='text'>&#x1f44e; {props.downVote}</h3>
        </div>
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