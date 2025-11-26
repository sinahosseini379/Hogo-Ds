import React from 'react';
import * as Module from './hint';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Hint' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Helpful hint' }} />,
};
