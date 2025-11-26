import React from 'react';
import * as Module from './tab-menu-horizontal';
import Template from '../../.storybook/story-template';

export default { title: 'UI/TabMenuHorizontal' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Tab A' }} />,
};
