import React from 'react';
import * as Module from './divider';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Divider' };

export const Default = {
  render: () => <Template module={Module} props={{ children: null }} />,
};
