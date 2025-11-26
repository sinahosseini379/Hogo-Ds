import React from 'react';
import * as Module from './badge';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Badge' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Badge' }} />,
};
