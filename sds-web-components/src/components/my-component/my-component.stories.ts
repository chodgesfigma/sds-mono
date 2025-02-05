import type { Meta, StoryObj } from '@storybook/html';

import { Components } from '../../components';
import { spread } from '../../utils/storybook-helpers';

type ComponentArgs = Components.MyComponent;

const meta = {
  title: 'SDS Primitives/my-component',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'my-component',
  render: args => `<my-component ${spread(args)}></my-component>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    first: 'First',
    middle: 'M',
    last: 'Last',
  },
};
