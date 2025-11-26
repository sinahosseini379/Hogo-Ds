import React from 'react';
import * as Module from './pagination';
import Template from '../../.storybook/story-template';

export default { title: 'UI/Pagination' };

export const Default = {
  render: () => <Template module={Module} props={{ current: 1, total: 5 }} />,
};
