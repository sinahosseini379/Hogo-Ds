import React from 'react';
import * as Module from './alert';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Alert' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Alert message' }} />,
};
