import React from 'react';
import * as Module from './switch';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Switch' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Toggle' }} />,
};
