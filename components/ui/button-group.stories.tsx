import React from 'react';
import * as Module from './button-group';
import Template from '../../.storybook/story-template';

export default { title: 'UI/ButtonGroup' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Btn1 Btn2' }} />,
};
