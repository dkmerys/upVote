import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return <Post
          whenPostClicked={props.onPostSelection}
          userName={post.userName}
          message={post.message}
          upVote={post.upVote}
          downVote={post.downVote}
          id={post.id}
          key={post.id} />
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;