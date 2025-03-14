import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsCheckboxGroup;

const meta = {
  title: 'SDS Primitives/Inputs/Checkbox Group',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-change'],
    },
  },
  component: 'sds-checkbox-group',
  render: args => `<sds-checkbox-group ${spread(args)}>
  <sds-checkbox-field value="one">Value one</sds-checkbox-field>
  <sds-checkbox-field value="two">Value two</sds-checkbox-field>
  <sds-checkbox-field value="three">Value three</sds-checkbox-field>
</sds-checkbox-group>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'Hello',
    description: 'I am a description',
  },
};
