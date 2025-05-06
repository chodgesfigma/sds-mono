import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsNotification;

const meta = {
  title: 'SDS primitives/Notification',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-dismiss'],
    },
  },
  component: 'sds-notification',
  render: args => `
    <sds-notification ${spread(args)}>
      <span slot="icon">
        <sds-icon-info></sds-icon-info>
      </span>
      <sds-text-strong>Notification Title</sds-text-strong>
      <sds-text>Hello there! This is a message</sds-text>
      ${args.variant === 'message' ? `<sds-button size="small">Hello</sds-button>` : `<sds-button-danger size="small">Hello</sds-button-danger>`}
    </sds-notification>
`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    variant: 'message',
    isDismissible: true,
  },
};
