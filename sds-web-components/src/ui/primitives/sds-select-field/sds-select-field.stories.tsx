import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSelectField;

const meta = {
  title: 'SDS Primitives/Inputs/Select Field',
  tags: ['autodocs'],
  parameters: { layout: 'centered', actions: { handles: ['input', 'change'] } },
  component: 'sds-select-field',
  render: args => `
    <sds-select-field
      ${spread(args)}
      default-selected-key="monday"
    >
      <sds-select-item text-value="monday">Monday</sds-select-item>
      <sds-select-item>Tuesday</sds-select-item>
      <sds-select-item>Wednesday</sds-select-item>
      <sds-select-item>Thursday</sds-select-item>
      <sds-select-item>Friday</sds-select-item>
      <sds-select-item>Saturday</sds-select-item>
      <sds-select-item>Sunday</sds-select-item>
    </sds-select-field>
    `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    placeholder: 'Select a day',
    description: 'Wowie!',
    label: 'Hello there...',
  },
};
