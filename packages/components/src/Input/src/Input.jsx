import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Styled';

const Input = ({
  type = 'text',
  value = '',
  onChange
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  // test the isRequired type with the default assignment (when does checking happen?)
  type: PropTypes.oneOf(['text', 'search', 'password']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Input;
