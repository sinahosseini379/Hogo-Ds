import React from 'react';
import * as Module from './avatar-empty-icons';
import Template from '../../.storybook/story-template';

export default { title: 'UI/AvatarEmptyIcons' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Empty' }} />,
};
