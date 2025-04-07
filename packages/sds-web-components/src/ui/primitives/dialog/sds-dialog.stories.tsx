import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsDialogButton;

const meta = {
  title: 'SDS primitives/Dialog',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-dialog',
  render: args => `
  <sds-dialog-button ${spread(args)}>
    <sds-icon-menu slot="icon"></sds-icon-menu>
    <sds-dialog-close></sds-dialog-close>
    <sds-dialog-title>Open Dialog</sds-dialog-title>
    <sds-dialog-description>
      The refund will be reflected in the customer’s bank account 2 to 3
      business days after processing.
    </sds-dialog-description>
    <sds-dialog-body>
      <sds-input-field label="Amount" name="amount" placeholder="$0.00"></sds-input-field>
    </sds-dialog-body>
    <sds-button-group>
      <sds-button>Refund</sds-button>
      <sds-button variant="subtle">
        Cancel
      </sds-button>
    </sds-button-group>
  </sds-dialog-button>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'Open Dialog',
    variant: 'primary',
    useIcon: true,
  },
};
