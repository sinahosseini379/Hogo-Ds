import React from 'react';
import * as Module from './svg-rating-icons';
import Template from '../../.storybook/story-template';

export default { title: 'UI/SVGRatingIcons' };

export const Default = {
  render: () => <Template module={Module} props={{ value: 3 }} />,
};
