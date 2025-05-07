import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsHeader;

const meta = {
  title: 'SDS compositions/Headers/sds-header',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-header',
  render: args => `<sds-header ${spread(args)}></sds-header>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
