import React from 'react';
import Button from '../dist/bundle';

export default { title: 'Button' };

const values = {
  standard: ''
};

export const standard = () =>
  <Button
    onChange={(e) => values.standard = e.target.value}
  />;
