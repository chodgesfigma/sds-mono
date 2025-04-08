import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSwitchGroup;

const meta = {
  title: 'SDS Primitives/Inputs/Switch Group',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-change'],
    },
  },
  component: 'sds-switch-group',
  render: args => `
    <sds-switch-group ${spread(args)}>
      <sds-switch-field
        label="Enable"
        description="Allow others to embed your event details on their own site."
      ></sds-switch-field>
      <sds-switch-field label="Don't you love it" description="Something magical"></sds-switch-field>
    </sds-switch-group>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
