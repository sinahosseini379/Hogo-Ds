import React from 'react';
import * as Module from './dropdown';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Dropdown' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Open' }} />,
};
