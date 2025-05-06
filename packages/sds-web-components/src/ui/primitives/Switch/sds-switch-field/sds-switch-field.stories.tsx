import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSwitchField;

const meta = {
  title: 'SDS Primitives/Inputs/Switch Field',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-change'],
    },
  },
  component: 'sds-switch-field',
  render: args => `<sds-switch-field ${spread(args)}></sds-switch-field>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'Enable',
    description: 'Allow others to embed your event details on their own site.',
  },
};
