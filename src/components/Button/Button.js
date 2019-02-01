import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  onClick: () => null,
  disabled: false
};

export default Button;
