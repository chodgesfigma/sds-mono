import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsCheckboxField;

const meta = {
  title: 'SDS Primitives/Inputs/Checkbox Field',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-change'],
    },
  },
  component: 'sds-checkbox-field',
  render: args => `<sds-checkbox-field ${spread(args)}></sds-checkbox-field>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    selected: true,
    indeterminate: false,
    disabled: false,
    label: 'This is a checkbox',
    description: 'This is a checkbox description',
  },
};
