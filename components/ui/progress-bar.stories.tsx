import React from 'react';
import * as Module from './progress-bar';
import Template from '../../.storybook/story-template';

export default { title: 'UI/ProgressBar' };

export const Default = {
  render: () => <Template module={Module} props={{ value: 40 }} />,
};
