import React from 'react';
import * as Module from './modal';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Modal' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Open Modal' }} />,
};
