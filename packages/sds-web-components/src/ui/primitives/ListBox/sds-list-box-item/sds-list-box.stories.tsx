import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsListBoxItem;

const meta = {
  title: 'SDS primitives/ListBox/sds-list-box-item',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-list-box-item',
  render: args => `<sds-list-box-item ${spread(args)}>List Box Item</sds-list-box-item>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
