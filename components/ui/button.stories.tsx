import type { Meta, StoryObj } from '@storybook/react';
import { Root } from './button';        // ← این مهمه: Root نه Button
import { Icon } from './button';

// یا می‌تونی اینجوری هم بنویسی (هر دو درسته):
// import { Root as Button, Icon } from './button';

const meta = {
  title: 'UI/Button',
  component: Root,                  // ← اینجا هم Root
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error'],
    },
    mode: {
      control: 'select',
      options: ['filled', 'stroke', 'lighter', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small', 'xsmall', 'xxsmall'],
    },
    asChild: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// استوری‌های مختلف
export const PrimaryFilled: Story = {
  args: {
    children: 'Primary Filled',
    variant: 'primary',
    mode: 'filled',
  },
};

export const PrimaryStroke: Story = {
  args: {
    children: 'Primary Stroke',
    variant: 'primary',
    mode: 'stroke',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </Icon>
        Like
      </>
    ),
    variant: 'primary',
    mode: 'filled',
  },
};

export const NeutralGhost: Story = {
  args: {
    children: 'Neutral Ghost',
    variant: 'neutral',
    mode: 'ghost',
  },
};

export const ErrorFilled: Story = {
  args: {
    children: 'Delete',
    variant: 'error',
    mode: 'filled',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};