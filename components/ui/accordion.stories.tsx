import React from 'react';
import * as Module from './accordion';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Accordion' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Panel' }} />,
};
