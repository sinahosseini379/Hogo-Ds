import React from 'react';
import * as Module from './status-badge';
import Template from '../../.storybook/story-template';

export default { title: 'UI/StatusBadge' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Active' }} />,
};
