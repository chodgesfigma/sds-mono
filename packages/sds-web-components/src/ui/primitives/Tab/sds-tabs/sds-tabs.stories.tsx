import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsTabs;

const meta = {
  title: 'SDS primitives/Tabs',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-tabs-selected'],
    },
  },
  component: 'sds-tabs',
  render: args => `
    <sds-tabs ${spread(args)}>
      <sds-tab panel-id="default">Default</sds-tab>
      <sds-tab panel-id="danger">Danger</sds-tab>
      <sds-tab panel-id="positive">Positive</sds-tab>
      <sds-tab panel-id="warning">Warning</sds-tab>
      <sds-tab panel-id="neutral">Neutral</sds-tab>
      <sds-tab-panel panel-id="default">This is the default thing</sds-tab-panel>
      <sds-tab-panel panel-id="danger">Some danger stuff</sds-tab-panel>
      <sds-tab-panel panel-id="positive">Some positive stuff</sds-tab-panel>
      <sds-tab-panel panel-id="warning">Some warning stuff</sds-tab-panel>
      <sds-tab-panel panel-id="neutral">Some neutral stuff</sds-tab-panel>
    </sds-tabs>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
