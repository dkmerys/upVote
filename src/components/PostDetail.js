import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostDetail(props) {
  const { post, onClickingDelete, onClickingDownvote, onClickingUpvote, onClickingEdit} = props;
  return (
    <React.Fragment>
      <h1>Post Details</h1>
      <h5>User Name:</h5>
      <h2>{post.userName}</h2>
      <h5>Message:</h5>
      <h2>{post.message}</h2>
      <button id='upvoteButton' class='button' onClick = {() => onClickingUpvote(post)}>&#128077;</button>
      <h3>{post.upVote}</h3>
      <button id='downvoteButton' class='button' onClick = {() => onClickingDownvote(post)}>&#x1f44e;</button> 
      <h3> {post.downVote}</h3>
      <button class='button' onClick = {() => onClickingEdit(post.id)}>Update post</button>
      <button class='button' onClick = {() => onClickingDelete(post.id)}>Delete post</button>
      <h3>Time created: {post.timeStamp}</h3>
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