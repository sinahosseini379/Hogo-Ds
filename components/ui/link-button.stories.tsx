import React from 'react';
import * as Module from './link-button';
import Template from '../../.storybook/story-template';

export default { title: 'UI/LinkButton' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Link' }} />,
};
