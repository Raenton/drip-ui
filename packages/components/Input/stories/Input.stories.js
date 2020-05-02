import React from 'react';
import Input from '../dist/bundle';

export default { title: 'Input' };

const values = {
  standard: ''
};

export const standard = () =>
  <Input
    type="text"
    value={values.standard}
    onChange={(e) => values.standard = e.target.value}
  />;
