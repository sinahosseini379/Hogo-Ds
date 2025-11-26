import React from 'react';
import * as Module from './color-picker';
import Template from '../../.storybook/story-template';

export default { title: 'UI/ColorPicker' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Color' }} />,
};
