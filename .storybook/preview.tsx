import React from 'react';
import { withThemeByClassName } from '@storybook/addon-styling';
import '../app/globals.css';

export const decorators = [
  (Story: any) => (
    <div style={{ padding: 16 }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};
