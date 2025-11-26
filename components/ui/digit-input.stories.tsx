import React from 'react';
import * as Module from './digit-input';
import Template from '../../.storybook/story-template';

export default { title: 'UI/DigitInput' };

export const Default = {
  render: () => <Template module={Module} props={{ value: '123' }} />,
};
