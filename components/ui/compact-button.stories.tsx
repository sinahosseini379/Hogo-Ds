import React from 'react';
import * as Module from './compact-button';
import Template from '../../.storybook/story-template';

export default { title: 'UI/CompactButton' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Compact' }} />,
};
