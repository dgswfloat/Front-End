import type { Meta, StoryObj } from '@storybook/nextjs';

import IdeaForm from './IdeaForm';

const meta = {
  component: IdeaForm,
} satisfies Meta<typeof IdeaForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};