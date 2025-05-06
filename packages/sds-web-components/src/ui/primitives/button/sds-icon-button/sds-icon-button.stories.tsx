import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsIconButton;

const meta = {
  title: 'SDS primitives/Buttons',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-icon-button',
  render: args => `<sds-icon-button ${spread(args)}><sds-icon-activity></sds-icon-activity></sds-icon-button>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const IconButton: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};
