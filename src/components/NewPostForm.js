import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';


function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({ userName: event.target.userName.value, message: event.target.message.value });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleNewPostFormSubmission}
      buttonText='Add post' />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
