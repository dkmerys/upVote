import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false,
      postList: [
        {

        }
      ]
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
    const newPostList = this.state.postList.concat(newPost);
    this.setState({postList: newPostList,
                  formVisibleOnPage: false})
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
    const editedPostList = this.state.postL
  }


  // handleDownvotePost method goes here
}