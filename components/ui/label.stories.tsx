import React from 'react';
import * as Module from './label';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Label' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Label' }} />,
};
