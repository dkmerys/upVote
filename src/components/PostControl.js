import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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
    const { id, userName, message, upVote, downVote } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      userName: userName,
      message: message,
      upVote: 0,
      downVote: 0
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.postList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, userName, message, upVote, downVote} = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleUpvotePost = (id, userName, message, upVote, downVote) => {
    const { dispatch } = this.props;
    const action = {
      type: 'UPVOTE_POST',
      id: id,
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote
    }
    dispatch(action);
    this.setState({selectedPost: null})
  }

  handleDownvotePost = (id, userName, message, upVote, downVote) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DOWNVOTE_POST',
      id: id,
      userName: userName,
      message: message,
      upVote: upVote,
      downVote: downVote
    }
    dispatch(action);
    this.setState({selectedPost: null})
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
                              postList = {this.props.postList}
                              onPostSelection = {this.handleChangingSelectedPost} />
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

PostControl.propTypes = {
  postList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    postList: state.postList,
    handleUpvotePost: state.handleUpvotePost
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;