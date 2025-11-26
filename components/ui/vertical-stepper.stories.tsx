import React from 'react';
import * as Module from './vertical-stepper';
import Template from '../../.storybook/story-template';

export default { title: 'UI/VerticalStepper' };

export const Default = {
  render: () => <Template module={Module} props={{ children: '1' }} />,
};
