import React from 'react';
import * as Module from './notification';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Notification' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Notification message' }} />,
};
