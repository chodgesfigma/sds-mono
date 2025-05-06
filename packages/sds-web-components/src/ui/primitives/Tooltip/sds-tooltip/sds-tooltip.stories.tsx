import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsTooltip & { content?: string; icon?: string };

const meta = {
  title: 'SDS primitives/Tooltip',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-tooltip',
  render: ({ content, icon, ...args }) => `
  <sds-flex gap="1600" direction="column" align-secondary="center" style="margin: 100px 0" size="full">

    <sds-flex-item>
      <sds-tooltip ${spread(args)}>
        <sds-button rounded slot="anchor">
          <sds-icon-${icon} />
        </sds-button>
        ${content}
      </sds-tooltip>
    </sds-flex-item>

    <sds-flex-item></sds-flex-item>

    <sds-flex-item size="full">
      <sds-flex flex-type="full" gap="200" align-primary="center">

        <sds-flex-item>
          <sds-tooltip placement="top">
            <sds-button rounded aria-label="Up" slot="anchor">
              <sds-icon-arrow-up />
            </sds-button>
            <sds-text-strong>Something interesting</sds-text-strong>
            <sds-text-small>
              For help accessing your account, please contact support.
            </sds-text-small>
          </sds-tooltip>
        </sds-flex-item>

        <sds-flex-item>
          <sds-tooltip placement="bottom">
            <sds-button rounded aria-label="Down" slot="anchor">
              <sds-icon-arrow-down />
            </sds-button>
            <sds-text-strong>Something interesting</sds-text-strong>
            <sds-text-small>
              For help accessing your account, please contact support.
            </sds-text-small>
          </sds-tooltip>
        </sds-flex-item>

        <sds-flex-item>
          <sds-tooltip placement="left">
            <sds-button rounded aria-label="Left" slot="anchor">
              <sds-icon-arrow-left />
            </sds-button>
            <sds-text-strong>Something interesting</sds-text-strong>
            <sds-text-small>
              For help accessing your account, please contact support.
            </sds-text-small>
          </sds-tooltip>
        </sds-flex-item>

        <sds-flex-item>
          <sds-tooltip placement="right">
            <sds-button rounded aria-label="Right" slot="anchor">
              <sds-icon-arrow-right />
            </sds-button>
            <sds-text-strong>Something interesting</sds-text-strong>
            <sds-text-small>
              For help accessing your account, please contact support.
            </sds-text-small>
          </sds-tooltip>
        </sds-flex-item>

      </sds-flex>
    </sds-flex-item>

  </sds-flex>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Tooltip: Story = {
  args: {
    placement: 'top',
    content: `<sds-text-strong>
  Something interesting
</sds-text-strong>
<sds-text-small>
  For help accessing your account, please contact support.
</sds-text-small>`,
    isActive: true,
    offset: 16,
    icon: `x`,
  },
};
