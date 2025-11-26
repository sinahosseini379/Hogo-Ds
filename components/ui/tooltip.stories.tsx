import React from 'react';
import * as Module from './tooltip';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Tooltip' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Hover me' }} />,
};
