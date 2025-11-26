import React from 'react';
import * as Module from './table';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Table' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Table' }} />,
};
