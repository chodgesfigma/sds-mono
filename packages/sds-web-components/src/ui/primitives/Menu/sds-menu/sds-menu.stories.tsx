import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsMenu;

const meta = {
  title: 'SDS primitives/Menu/sds-menu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-menu',
  render: args => `<sds-menu ${spread(args)}></sds-menu>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
