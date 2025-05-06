import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsDestructiveIconButton;

const meta = {
  title: 'SDS primitives/Buttons',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-destructive-icon-button',
  render: args => `<sds-destructive-icon-button ${spread(args)}><sds-icon-activity></sds-icon-activity></sds-destructive-icon-button>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const DestructiveIconButton: Story = {
  args: {
    variant: 'danger-primary',
    size: 'medium',
    disabled: false,
  },
};
