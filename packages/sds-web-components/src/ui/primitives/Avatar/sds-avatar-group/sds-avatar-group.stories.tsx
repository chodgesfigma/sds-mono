import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { placeholder } from '../../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAvatarGroup;

const meta = {
  title: 'SDS primitives/Avatars/Avatar Group',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-avatar-group',
  render: args => `<sds-avatar-group ${spread(args)}>
    <sds-avatar initials="JA"></sds-avatar>
    <sds-avatar src="${placeholder}"></sds-avatar>
    <sds-avatar initials="LO"></sds-avatar>
    <sds-avatar src="${placeholder}"></sds-avatar>
    <sds-avatar initials="WM"></sds-avatar>
    <sds-avatar src="${placeholder}"></sds-avatar>
  </sds-avatar-group>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    spacing: '200',
    max: 3,
  },
};
