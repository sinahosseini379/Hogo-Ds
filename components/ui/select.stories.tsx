import React from 'react';
import * as Module from './select';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Select' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Select' }} />,
};
