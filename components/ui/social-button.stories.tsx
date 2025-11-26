import React from 'react';
import * as Module from './social-button';
import Template from '../../.storybook/story-template';

export default { title: 'UI/SocialButton' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Share' }} />,
};
