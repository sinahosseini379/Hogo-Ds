import React from 'react';
import * as Module from './dot-stepper';
import Template from '../../.storybook/story-template';

export default { title: 'UI/DotStepper' };

export const Default = {
  render: () => <Template module={Module} props={{ children: '1' }} />,
};
