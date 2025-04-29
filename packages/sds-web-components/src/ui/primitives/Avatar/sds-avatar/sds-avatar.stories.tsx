import { Components } from '../../../../components';
import { hideArgs } from '../../../../utils/storybook-helpers';
import { placeholder } from '../../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAvatar;

const meta = {
  title: 'SDS primitives/Avatars/Avatar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-avatar',
  argTypes: {
    ...hideArgs<ComponentArgs>(['alt', 'initials', 'size', 'square']),
  },
  render: args => `
    <sds-flex align-primary="center" gap="200" align-secondary="center">
      <sds-avatar
        src="${args.src}"
        initials="JA"
        size="small"
      ></sds-avatar>
      <sds-avatar src="${args.src}" initials="JA"></sds-avatar>
      <sds-avatar
        src="${args.src}"
        initials="JA"
        square
        size="large"
      ></sds-avatar>
    </sds-flex>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    src: placeholder,
    square: false,
    size: 'medium',
    alt: '',
    initials: '',
  },
};
