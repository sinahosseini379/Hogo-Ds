import React from 'react';
import * as Module from './drawer';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Drawer' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Open Drawer' }} />,
};
