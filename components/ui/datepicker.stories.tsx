import React from 'react';
import * as Module from './datepicker';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Datepicker' };

export const Default = {
  render: () => <Template module={Module} props={{ children: 'Pick a date' }} />,
};
