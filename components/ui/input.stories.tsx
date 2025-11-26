import React from 'react';
import * as Module from './input';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Input' };

export const Default = {
  render: () => <Template module={Module} props={{ placeholder: 'Enter text', children: 'Label' }} />,
};
