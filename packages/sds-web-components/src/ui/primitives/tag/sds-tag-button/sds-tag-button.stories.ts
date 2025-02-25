import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsTagButton;

const meta = {
  title: 'SDS Primitives/Tags',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  component: 'sds-tag-button',
  render: ({ scheme, ...args }) => `
    <sds-toggle-tag-list>
      <sds-tag-button scheme=${scheme ?? 'brand'} ${spread(args)}>Default</sds-tag-button>
      <sds-tag-button scheme=${scheme ?? 'danger'} ${spread(args)}>Danger</sds-tag-button>
      <sds-tag-button scheme=${scheme ?? 'positive'} ${spread(args)}>Positive</sds-tag-button>
      <sds-tag-button scheme=${scheme ?? 'warning'} ${spread(args)}>Warning</sds-tag-button>
      <sds-tag-button scheme=${scheme ?? 'neutral'} ${spread(args)}>Neutral</sds-tag-button>
    </sds-toggle-tag-list>
    `,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const TagButton: Story = {
  args: {
    variant: 'primary',
  },
};
