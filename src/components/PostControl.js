import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';



class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false,
    }
  }

  handleClick = () => {
    if (this.state.selectedPost !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, userName, message } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      userName: userName,
      message: message,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.postList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const newPostList = this.state.postList.filter(post => post.id !== id);
    this.setState({
      postList: newPostList,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const editedPostList = this.state.postList
                            .filter(post => post.id !== this.state.selectedPost.id)
                            .concat(postToEdit);
    this.setState({
      postList: editedPostList,
      editing: false,
      selectedPost: null
    });
  }

  handleUpvotePost = (id) => {
    const upvotedPost = this.state.postList.filter(post => post.id === id)[0];
    upvotedPost.upVote += 1;
    const editedPostList = this.state.postList
                            .filter(post => post.id !== this.state.selectedPost.id)
                            .concat(upvotedPost);
    this.setState({
      postList: editedPostList
    });
  }

  handleDownvotePost = (id) => {
    const downvotedPost = this.state.postList.filter(post => post.id === id)[0];
    downvotedPost.downVote -= 1;
    const editedPostList = this.state.postList
                            .filter(post => post.id !== this.state.selectedPost.id)
                            .concat(downvotedPost);
    this.setState({
      postList: editedPostList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm
                              post = {this.state.selectedPost}
                              onEditPost = {this.handleEditingPostInList} />
      buttonText = 'Return to Post List'
    } else if (this.state.selectedPost !== null) {
      currentlyVisibleState = <PostDetail
                              post = {this.state.selectedPost}
                              onClickingDelete = {this.handleDeletingPost}
                              onClickingEdit = {this.handleEditClick}
                              onClickingUpvote = {this.handleUpvotePost}
                              onClickingDownvote = {this.handleDownvotePost} />
      buttonText = 'Return to Post List'
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm
                                onNewPostCreation = {this.handleAddingNewPostToList} />
      buttonText = 'Return to Post List';
    } else {
      currentlyVisibleState = <PostList
                              postList = {this.state.postList}
                              onPostSelection = {this.handleChanginSelectedPost} />
      buttonText = 'Add Post'
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl = connect()(PostControl);
export default PostControl;