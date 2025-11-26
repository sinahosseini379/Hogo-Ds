import React from 'react';
import * as Module from './avatar-group-compact';
import Template from '../../.storybook/story-template';

export default { title: 'UI/AvatarGroupCompact' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'A,B' }} />,
};
