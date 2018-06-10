import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Input = props => (
  <div>
    <input id={props.id} value={props.value} className="input" type={props.type} onChange={props.onChange} />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
