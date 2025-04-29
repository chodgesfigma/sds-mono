import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsHeaderAuth;

const meta = {
  title: 'SDS compositions/Headers/sds-header-auth',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-header-auth',
  render: args => `<sds-header-auth ${spread(args)}></sds-header-auth>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
