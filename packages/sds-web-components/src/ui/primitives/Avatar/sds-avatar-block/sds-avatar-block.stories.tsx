import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { placeholder } from '../../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAvatarBlock;

const meta = {
  title: 'SDS primitives/Avatars/Avatar Block',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-avatar-block',
  render: args => `
  <sds-avatar-block ${spread(args)}>
    <sds-avatar square size="large" src="${placeholder}" />
  </sds-avatar-block>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    avatarTitle: 'Full Name',
    description: '@fullname420',
  },
};
