import { Components, SelectionMode } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsToggleTag & {
  selectionMode: SelectionMode;
};

const meta = {
  title: 'SDS Primitives/Tags',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['toggle', 'togglesUpdated'],
    },
  },
  argTypes: {
    allowSelfToggle: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withActions],
  component: 'sds-toggle-tag',
  render: ({ selectionMode, ...args }) => `
    <sds-toggle-tag-group>
      <p slot="label">Hello there</p>
      <sds-toggle-tag-list selection-mode="${selectionMode}">
        <sds-toggle-tag selected id="1" ${spread(args)}>
          <sds-icon-check slot="icon"></sds-icon-check>
          Default
        </sds-toggle-tag>
        <sds-toggle-tag id="2" ${spread(args)}>
          <sds-icon-airplay slot="icon"></sds-icon-airplay>
          Hello
        </sds-toggle-tag>
        <sds-toggle-tag id="3" ${spread(args)}>
          Love
        </sds-toggle-tag>
        <sds-toggle-tag id="4" ${spread(args)}>
          This
        </sds-toggle-tag>
        <sds-toggle-tag id="5" ${spread(args)}>
          Story
        </sds-toggle-tag>
      </sds-toggle-tag-list>
    <sds-tag-toggle-group>
    `,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const TagToggleGroup: Story = {
  args: {
    selected: false,
    selectionMode: 'single',
  },
};
