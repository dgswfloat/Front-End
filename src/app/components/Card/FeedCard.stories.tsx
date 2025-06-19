import type { Meta, StoryObj } from '@storybook/nextjs';

import FeedCard from './FeedCard';

const meta = {
  component: FeedCard,
} satisfies Meta<typeof FeedCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};