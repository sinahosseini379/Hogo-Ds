import React from 'react';
import * as Module from './slider';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Slider' };

export const Default = {
  render: () => <Template module={Module} props={{ value: 30 }} />,
};
