import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSlider;

const meta = {
  title: 'SDS primitives/Inputs/Slider Field',
  tags: ['autodocs'],
  parameters: { layout: 'centered', actions: { handles: ['sds-change', 'sds-input'] } },
  component: 'sds-slider',
  render: args => `<sds-slider ${spread(args)}></sds-slider>`,
  decorators: [withActions],
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'Check this out!',
    description: "Isn't this great?",
    disabled: false,
    showOutput: true,
    defaultValue: 30,
  },
};
