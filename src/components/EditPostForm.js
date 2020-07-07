import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';


function EditPostForm(props) {
  const { post } = props;
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    if (event.target.userName.value === "") {
      event.target.userName.value = post.userName;
    }
    if (event.target.message.value === "") {
      event.target.message.value = post.message;
    }
    props.onEditPost({ userName: event.target.userName.value, message: event.target.message.value });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText='Update post' />
    </React.Fragment>
  );
}


EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;