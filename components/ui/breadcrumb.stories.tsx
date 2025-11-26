import React from 'react';
import * as Module from './breadcrumb';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Breadcrumb' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Home / Section' }} />,
};
