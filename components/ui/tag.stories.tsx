import React from 'react';
import * as Module from './tag';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Tag' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Tag' }} />,
};
