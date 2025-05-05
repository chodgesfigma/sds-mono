import { Components } from '../../../../components';
import { hideArgs, spread } from '../../../../utils/storybook-helpers';
import { placeholder } from '../../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAvatarButton;

const meta = {
  title: 'SDS primitives/Avatars/Avatar Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
  },
  component: 'sds-avatar-button',
  argTypes: {
    ...hideArgs<ComponentArgs>(['size', 'square', 'options']),
  },
  render: args => `
    <sds-flex align-primary="center" gap="200" align-secondary="center">
      <sds-avatar-button square size="small" ${spread(args)}></sds-avatar-button>
      <sds-avatar-button square ${spread(args)}></sds-avatar-button>
      <sds-avatar-button size="large" ${spread(args)}></sds-avatar-button>
    </sds-flex>


    <script>
      document.querySelectorAll('sds-avatar-button').forEach((el) => {
        if(!el) return;
        el.options = { onClick: () => {} };
      })
    </script>
    `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    src: placeholder,
    initials: '',
    alt: '',
  },
};
