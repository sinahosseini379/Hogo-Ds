import React from 'react';
import * as Module from './notification-provider';
import Template from '../../.storybook/story-template';

export default { title: 'UI/NotificationProvider' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Provider' }} />,
};
