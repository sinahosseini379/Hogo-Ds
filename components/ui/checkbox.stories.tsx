import React from 'react';
import * as Module from './checkbox';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Checkbox' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Checkbox' }} />,
};
