import { spread } from '../../../utils/storybook-helpers';
import { SdsTextBaseProps } from './sds-text-base';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsTextBaseProps;

const meta = {
  title: 'SDS Primitives/Text',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-text',
  render: args => `<sds-text ${spread(args)}>Hello World!</sds-text>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    elementType: 'h2',
  },
  render: args => `<sds-text-title-page ${spread(args)}>Hello World!</sds-text-title-page>`,
};
