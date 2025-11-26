import React from 'react';
import * as Module from './command-menu';
import Template from '../../.storybook/story-template';

export default { title: 'UI/CommandMenu' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Open' }} />,
};
