import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styled';

const Button = ({
  type = 'text',
  onClick
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    />
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
