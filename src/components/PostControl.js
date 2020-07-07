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

  handle
}