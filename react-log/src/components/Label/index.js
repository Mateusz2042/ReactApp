import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Label = props => (
  <div>
    <label htmlFor={props.id} id={props.id}>
      {props.label}
    </label>
  </div>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Label.defaultProps = {
  id: '',
};

export default Label;
