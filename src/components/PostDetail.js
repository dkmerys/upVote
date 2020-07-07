import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostDetail(props) {
  const { post, onClickingDelete, onClickingDownvote, onClickingUpvote, onClickingEdit} = props;
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h3>User Name: {post.userName}</h3>
      <h3>Message content: {post.message}</h3>
      <button onClick = {() => onClickingUpvote(post.id)}>&#128077;</button>
      <h3>{post.upVote}</h3>
      <button onClick = {() => onClickingDownvote(post.id)}>&#x1f44e;</button> 
      <h3> {post.downVote}</h3>
      <button onClick = {() => onClickingEdit(post.id)}>Update post</button>
      <button onClick = {() => onClickingDelete(post.id)}>Delete post</button>
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