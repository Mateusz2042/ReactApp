import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = props => (
  <button className="button" onClick={props.onClick}>
    {props.title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
