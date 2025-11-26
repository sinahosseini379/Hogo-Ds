import React from 'react';
import * as Module from './avatar';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Avatar' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'A' }} />,
};
