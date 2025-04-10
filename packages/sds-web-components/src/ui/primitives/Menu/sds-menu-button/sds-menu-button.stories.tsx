import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsMenuButton;

const meta = {
  title: 'SDS primitives/Menu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-menu-button',
  render: args => `
  <sds-menu-button ${spread(args)}>
    <sds-icon-menu slot="icon"></sds-icon-menu>
    <sds-menu-item>New…</sds-menu-item>
    <sds-menu-item is-disabled>Open…</sds-menu-item>
    <sds-menu-part variant="separator"></sds-menu-part>
    <sds-menu-item>
      <sds-menu-part variant="label">Save</sds-menu-part>
      <sds-menu-shortcut>⌘S</sds-menu-shortcut>
    </sds-menu-item>
    <sds-menu-item>
      <sds-menu-part variant="label">Delete</sds-menu-part>
      <sds-menu-part variant="description">Delete this thing forever</sds-menu-part>
      <sds-menu-shortcut>⇧⌘⌫</sds-menu-shortcut>
    </sds-menu-item>
    <sds-menu-item>Save as…</sds-menu-item>
    <sds-menu-item>Rename…</sds-menu-item>
    <sds-menu-part variant="separator"></sds-menu-part>
    <sds-menu-item>Page setup…</sds-menu-item>
    <sds-menu-item>Print…</sds-menu-item>
  </sds-menu-button>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'Open menu',
  },
};
