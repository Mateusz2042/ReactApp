import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ErrorMessage = props => (
  <div className="size">
    <label htmlFor="error" className="label">
      {props.message}
    </label>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
