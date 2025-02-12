import { spread } from '../../../utils/storybook-helpers';
import { SdsLink } from './sds-link';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsLink;

const meta = {
  title: 'SDS Primitives/SDS Link',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-link',
  render: args => `<sds-link ${spread(args)}>Hello world!</sds-link>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    href: 'https://www.figma.com/',
  },
};
