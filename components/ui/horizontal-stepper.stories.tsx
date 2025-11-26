import React from 'react';
import * as Module from './horizontal-stepper';
import Template from '../../.storybook/story-template';

export default { title: 'UI/HorizontalStepper' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Step 1' }} />,
};
