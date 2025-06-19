import type { Meta, StoryObj } from '@storybook/nextjs';

import SearchModal from './SearchModal';

const meta = {
  component: SearchModal,
} satisfies Meta<typeof SearchModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};