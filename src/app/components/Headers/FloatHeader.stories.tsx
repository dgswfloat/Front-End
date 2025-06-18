import type { Meta, StoryObj } from '@storybook/nextjs';

import FloatHeader from './FloatHeader';

const meta = {
  component: FloatHeader,
} satisfies Meta<typeof FloatHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};