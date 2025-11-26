import React from 'react';
import * as Module from './file-format-icon';
import Template from '../../.storybook/story-template';

export default { title: 'UI/FileFormatIcon' };

export const Default = {
  render: () => <Template module={Module} props={{ format: 'PNG' }} />,
};
