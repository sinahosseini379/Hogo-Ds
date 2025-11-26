import React from 'react';
import * as Module from './avatar-group';
import Template from '../../.storybook/story-template';

export default { title: 'UI/AvatarGroup' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'A, B' }} />,
};
