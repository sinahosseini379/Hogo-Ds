import React from 'react';
import * as Module from './fancy-button';
import Template from '../../.storybook/story-template';

export default { title: 'UI/FancyButton' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Fancy' }} />,
};
