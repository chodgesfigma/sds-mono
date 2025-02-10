import type { Meta, StoryObj } from '@storybook/html';
import { withActions } from '@storybook/addon-actions/decorator';

import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';

type ComponentArgs = Components.SdsTag & { removable: boolean };

const meta = {
  title: 'SDS Primitives/Tags',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['removed'],
    },
  },
  decorators: [withActions],
  component: 'sds-tag',
  render: ({ scheme, ...args }) => `
    <sds-toggle-tag-list>
      <sds-tag scheme=${scheme ?? 'brand'} ${spread(args)}>Default</sds-tag>
      <sds-tag scheme=${scheme ?? 'danger'} ${spread(args)}>Danger</sds-tag>
      <sds-tag scheme=${scheme ?? 'positive'} ${spread(args)}>Positive</sds-tag>
      <sds-tag scheme=${scheme ?? 'warning'} ${spread(args)}>Warning</sds-tag>
      <sds-tag scheme=${scheme ?? 'neutral'} ${spread(args)}>Neutral</sds-tag>
    </sds-toggle-tag-list>

    <script>
      ${
        args.removable &&
        `document.querySelectorAll('sds-tag').forEach((node) => {
          node.addEventListener('removed', () => {
            console.log('removed');
          });
        });
      `
      }
    </script>
    `,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Tag: Story = {
  args: {
    variant: 'primary',
    removable: false,
  },
};
