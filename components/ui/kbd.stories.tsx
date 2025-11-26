import React from 'react';
import * as Module from './kbd';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Kbd' };

export const Default = {
  render: () => <Template module={Module} props={{ children: '⌘K' }} />,
};
