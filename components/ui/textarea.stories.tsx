import React from 'react';
import * as Module from './textarea';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Textarea' };

export const Default = {
  render: () => <Template module={Module} props={{ placeholder: 'Write something...', children: 'Label' }} />,
};
