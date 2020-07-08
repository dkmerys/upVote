import React from 'react';
import PropTypes from 'prop-types';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          id='userName'
          type='text'
          name='userName'
          placeholder='Please enter a user name.' />
          <br />
        <input
          id='message'
          type='text'
          name='message'
          placeholder='Please enter your message here.' />
        <br />
        <button class='button' type='submit' >{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText:PropTypes.string
}

export default ReusableForm;