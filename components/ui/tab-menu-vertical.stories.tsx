import React from 'react';
import * as Module from './tab-menu-vertical';
import Template from '../../.storybook/story-template';

export default { title: 'UI/TabMenuVertical' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Tab 1' }} />,
};
