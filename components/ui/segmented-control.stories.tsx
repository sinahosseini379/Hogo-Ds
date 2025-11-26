import React from 'react';
import * as Module from './segmented-control';
import Template from '../../.storybook/story-template';

export default { title: 'UI/SegmentedControl' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Option' }} />,
};
