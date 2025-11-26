import React from 'react';
import * as Module from './progress-circle';
import Template from '../../.storybook/story-template';

export default { title: 'UI/ProgressCircle' };

export const Default = {
  render: () => <Template module={Module} props={{ value: 50 }} />,
};
