import React from 'react';
import * as Module from './radio';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Radio' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Option' }} />,
};
