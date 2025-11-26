import React from 'react';
import * as Module from './file-upload';
import Template from '../../.storybook/story-template';

export default { title: 'UI/FileUpload' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Upload' }} />,
};
