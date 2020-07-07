import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostDetail(props) {
  const { post, onClickingDelete, onClickingUpvote, onClickingDownvote} = props;
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>User Name: {post.userName}</h3>
      <h3>Message content: {post.message}</h3>
      <button onClick={props.onClickingUpvote}>&#128077;</button>
      <h3>{post.upVote}</h3>
      <button onClick={props.onClickingDownvote}>&#x1f44e;</button> 
      <h3> {post.downVote}</h3>
      <button onClick={props.onClickingEdit}>Update post</button>
      <button onClick={props.onClickingDelete}>Delete post</button>
      <hr />
    </React.Fragment>
  );
}


PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingUpvote: PropTypes.func,
  onClickingDownvote: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;